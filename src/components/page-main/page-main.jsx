import React from "react";
import {connect} from "react-redux";

import PropTypes from "prop-types";

import FilmsList from "../films-list/films-list";
import Filter from "../filter/filter";
import Footer from "../footer/footer";

import {changeGenre, incrementRendered, resetRendered} from "../../store/action";
import {validFilm, validUserData} from "../../utils/props";
import ShowMore from "../show-more/show-more";
import FilmsCatalog from "../films-catalog/films-catalog";
import PageContent from "../page-content/page-content";
import {Link} from "react-router-dom";
import {getRendered, getGenresList, getActiveGenre, getFilms, getFilteredFilms, getUserData} from "../../store/reducers/selectors";
import UserBlock from "../user-block/user-block";
import Logo from "../logo/logo";
import ButtonPlay from "../button-play/button-play";


const PageMain = (props) => {
  const {
    title,
    genre,
    year,
    films,
    activeGenre,
    filterChange,
    filteredFilms,
    genresList,
    rendered,
    userData,
    incrementRenderedFilms,
  } = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo/>
          <UserBlock
            userData = {userData}
          />
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
                {/* TODO: Перерисовывается кнопка воспроизвести фильм, придумать чего делать с этим*/}
                <Link className="btn btn--play movie-card__button" type="button" to={`/films/1`}>
                  <ButtonPlay/>
                </Link>
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

      <PageContent>
        <FilmsCatalog>
          <Filter
            genres = {genresList}
            activeGenre = {activeGenre}
            onFilterSelect = {filterChange}
          />

          <FilmsList
            films = {filteredFilms}
            maxQuantity = {rendered}
          />
          {filteredFilms.length > rendered ?
            <ShowMore
              rendered = {rendered}
              filmsQuantity = {films.length}
              onShowMore = {incrementRenderedFilms}
            /> : ``}
        </FilmsCatalog>
        <Footer
          isLight = {true}
        />
      </PageContent>
    </React.Fragment>
  );
};

PageMain.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(validFilm).isRequired,
  filteredFilms: PropTypes.arrayOf(validFilm).isRequired,
  activeGenre: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
  genresList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  rendered: PropTypes.number.isRequired,
  incrementRenderedFilms: PropTypes.func.isRequired,
  userData: validUserData,
};

const mapStateToProps = (state) => ({
  activeGenre: getActiveGenre(state),
  films: getFilms(state),
  filteredFilms: getFilteredFilms(state),
  genresList: getGenresList(state),
  rendered: getRendered(state),
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch) => ({
  filterChange(genre) {
    dispatch(changeGenre(genre));
    dispatch(resetRendered());
  },

  incrementRenderedFilms(increment) {
    dispatch(incrementRendered(increment));
  }
});

// export {PageMain};
export default connect(mapStateToProps, mapDispatchToProps)(PageMain);
