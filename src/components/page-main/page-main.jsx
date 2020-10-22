import React from "react";
import {connect} from "react-redux";

import PropTypes from "prop-types";

import FilmsList from "../films-list/films-list";
import Filter from "../filter/filter";
import Footer from "../footer/footer";

import {ActionCreator} from "../../store/action";
import {filterFilms} from "../../core";
import {validFilm} from "../../utils/props";

const MAX_FILMS_QUANTITY = 8;

const PageMain = (props) => {
  const {
    title,
    genre,
    year,
    films,
    activeGenre,
    filterChange,
    genresList,
  } = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Filter
            genres = {genresList}
            activeGenre = {activeGenre}
            onFilterSelect = {filterChange}
          />
          <FilmsList
            films = {films}
            maxQuantity = {MAX_FILMS_QUANTITY}
          />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

PageMain.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(validFilm).isRequired,
  activeGenre: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
  genresList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  films: state.filteredFilms,
  genresList: state.genresList,
});

const mapDispatchToProps = (dispatch) => ({
  filterChange(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterFilms(filterFilms(genre)));
  }
});

// export {PageMain};
export default connect(mapStateToProps, mapDispatchToProps)(PageMain);
