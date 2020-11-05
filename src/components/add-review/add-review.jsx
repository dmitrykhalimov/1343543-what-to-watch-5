import React, { useEffect } from "react";

import PropTypes from "prop-types";
import {getActiveFilm} from "../../store/reducers/selectors";
import {withRouter} from "react-router";
import {connect} from "react-redux";

import FormReview from "../form-review/form-review";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import {fetchSingleFilm} from "../../store/api-actions";

const AddReview = (props) => {
  const id = props.match.params.id;
  const {handlePageLoad, activeFilm} = props;

  const backgroundStyle = {
    backgroundColor: activeFilm.backgroundColor,
  };

  useEffect(() => {
    handlePageLoad(id);
  }, []);

  return (
    <section className="movie-card movie-card--full" style={backgroundStyle}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={activeFilm.background} alt={activeFilm.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">{activeFilm.title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={activeFilm.poster} alt={`${activeFilm.title} poster`} width="218" height="327" />
        </div>
      </div>

      <FormReview />

    </section>
  );
};

AddReview.propTypes = {};

const mapStateToProps = (state) => ({
  activeFilm: getActiveFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  handlePageLoad(id) {
    dispatch(fetchSingleFilm(id));
  },
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddReview));

