import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo";
import FilmsCatalog from "../films-catalog/films-catalog";
import FilmsList from "../films-list/films-list";
import Footer from "../footer/footer";
import {validFilm} from "../../utils/props";
import {connect} from "react-redux";
import {getFavorite} from "../../store/reducers/selectors";
import UserBlock from "../user-block/user-block";
import { fetchFavorites } from "../../store/api-actions";

const MyList = (props) => {
  const {films, handlePageLoad} = props;

  useEffect(() => {
    handlePageLoad();
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo></Logo>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>
      </header>

      <FilmsCatalog>
        <FilmsList
          films = {films}
          maxQuantity = {films.length}
        />
      </FilmsCatalog>

      <Footer
        isLight={true}
      />
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(validFilm).isRequired,
  handlePageLoad: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFavorite(state),
});

const mapDispatchToProps = (dispatch) => ({
  handlePageLoad() {
    dispatch(fetchFavorites());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);


