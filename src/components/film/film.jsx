import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {validFilm, validReview} from "../../utils/props";
import Tabs from "../tabs/tabs";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab";
import {findByKey} from "../../utils/utils";
import FilmsList from "../films-list/films-list";
import Footer from "../footer/footer";
import PageContent from "../page-content/page-content";
import MoreLikeThis from "../more-like-this/more-like-this";

const MAX_FILMS_QUANTITY = 4;
const TabsWrapped = withActiveTab(Tabs);

class Film extends PureComponent {
  constructor(props) {
    super(props);
  }

  filterFilms(film) {
    return this.props.films.filter((item) => {
      return (item.genre === film.genre) && (item.id !== film.id);
    });
  }

  render() {
    const {films, reviews, onPlayClick} = this.props;
    const id = this.props.match.params.id;
    const film = findByKey(films, id);
    const review = reviews[id];
    const similarFilms = this.filterFilms(film);

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={film.background} alt={film.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="/" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{film.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{film.genre}</span>
                  <span className="movie-card__year">{film.year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button
                    className="btn btn--play movie-card__button"
                    type="button"
                    onClick={(evt) => {
                      evt.preventDefault();
                      onPlayClick(film.id);
                    }}
                  >
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
                  <Link className="btn movie-card__button" to={`${film.id}/review`}>Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <TabsWrapped
              film = {film}
              review = {review}
            />
          </div>
        </section>

        {/* <PageContent>
          <MoreLikeThis>
            <FilmsList
              films = {similarFilms}
              maxQuantity = {MAX_FILMS_QUANTITY}
            />
          </MoreLikeThis>
          <Footer/>
        </PageContent> */}
      </React.Fragment>
    );
  }
}
Film.propTypes = {
  reviews: PropTypes.arrayOf(validReview).isRequired,
  onPlayClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(validFilm).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = ({data}) => ({
  films: data.films,
  reviews: data.reviews,
});

export default withRouter(connect(mapStateToProps)(Film));


