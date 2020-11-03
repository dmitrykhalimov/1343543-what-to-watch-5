import React from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo";
import FilmsCatalog from "../films-catalog/films-catalog";
import FilmsList from "../films-list/films-list";
import {validFilm} from "../../utils/props";
import {connect} from "react-redux";
import {getFilms, getRendered} from "../../store/reducers/selectors";

const MyList = (props) => {
  const {films, rendered} = props;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo></Logo>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <FilmsCatalog>
        <FilmsList
          films = {films}
          maxQuantity = {rendered}
        />
      </FilmsCatalog>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(validFilm).isRequired,
  rendered: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  // временное решение, когда будет нормальная реализация mylist - поправлю
  rendered: getRendered(state),
});

export default connect(mapStateToProps)(MyList);


