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

import {getRendered, getGenresList, getActiveGenre, getFilms, getFilteredFilms, getUserData, getPromoFilm} from "../../store/reducers/selectors";

import FilmHeader from "../film-header/film-header";
import FilmTitle from "../film-title/film-title";
import FilmPoster from "../film-poster/film-poster";


const PageMain = (props) => {
  const {
    films,
    activeGenre,
    onFilterChange,
    filteredFilms,
    filmPromo,
    genresList,
    rendered,
    onIncrementFilms,
  } = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <FilmHeader
          background = {filmPromo.background}
          title = {filmPromo.title}
        />
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <FilmPoster
              poster = {filmPromo.poster}
              title = {filmPromo.title}
            />
            <FilmTitle
              title = {filmPromo.title}
              genre = {filmPromo.genre}
              year = {filmPromo.year}
              id = {filmPromo.id}
              isPromo = {true}
              isFavorite = {filmPromo.isFavorite}
            />
          </div>
        </div>
      </section>

      <PageContent>
        <FilmsCatalog>
          <Filter
            genres = {genresList}
            activeGenre = {activeGenre}
            onFilterSelect = {onFilterChange}
          />
          <FilmsList
            films = {filteredFilms}
            maxQuantity = {rendered}
          />
          {filteredFilms.length > rendered ?
            <ShowMore
              rendered = {rendered}
              filmsQuantity = {films.length}
              onShowMore = {onIncrementFilms}
            /> : ``}
        </FilmsCatalog>
        <Footer/>
      </PageContent>
    </React.Fragment>
  );
};

PageMain.propTypes = {
  films: PropTypes.arrayOf(validFilm).isRequired,
  filteredFilms: PropTypes.arrayOf(validFilm).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  genresList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  rendered: PropTypes.number.isRequired,
  filmPromo: validFilm,
  onIncrementFilms: PropTypes.func.isRequired,
  userData: validUserData,
};

const mapStateToProps = (state) => ({
  activeGenre: getActiveGenre(state),
  films: getFilms(state),
  filteredFilms: getFilteredFilms(state),
  genresList: getGenresList(state),
  rendered: getRendered(state),
  userData: getUserData(state),
  filmPromo: getPromoFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange(genre) {
    dispatch(changeGenre(genre));
    dispatch(resetRendered());
  },

  onIncrementFilms(increment) {
    dispatch(incrementRendered(increment));
  }
});

export {PageMain};
export default connect(mapStateToProps, mapDispatchToProps)(PageMain);
