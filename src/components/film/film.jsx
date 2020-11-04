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
import {getActiveFilm, getFilms} from "../../store/reducers/selectors";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import {fetchSingleFilm} from "../../store/api-actions";

const MAX_FILMS_QUANTITY = 4;
const TabsWrapped = withActiveTab(Tabs);

class Film extends PureComponent {
  constructor(props) {
    super(props);

    this._onPageLoad = props.onPageLoad;

    this._id = props.match.params.id;
  }

  filterFilms(film) {
    return this.props.films.filter((item) => {
      return (item.genre === film.genre) && (item.id !== film.id);
    });
  }

  checkFilter() {
    console.log(activeFilm);
  }

  componentDidMount() {
    this._onPageLoad(this.props.match.params.id);
  }

  render() {
    const {films, reviews, onPlayClick} = this.props;
    const film = findByKey(films, this._id);
    const activeFilm = this.props.activeFilm;
    const review = reviews[this._id];
    const similarFilms = this.filterFilms(film);

    const backgroundStyle = {
      backgroundColor: film.backgroundColor,
    };

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full" style={backgroundStyle}>
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={activeFilm.background} alt={activeFilm.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <Logo/>
              <UserBlock/>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{activeFilm.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{activeFilm.genre}</span>
                  <span className="movie-card__year">{activeFilm.year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button
                    className="btn btn--play movie-card__button"
                    type="button"
                    onClick={(evt) => {
                      evt.preventDefault();
                      onPlayClick(activeFilm.id);
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
                  <Link className="btn movie-card__button" to={`${activeFilm.id}/review`}>Add review</Link>
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

        <PageContent>
          <MoreLikeThis>
            <FilmsList
              films = {similarFilms}
              maxQuantity = {MAX_FILMS_QUANTITY}
            />
          </MoreLikeThis>
          <Footer
            isLight={true}
          />
        </PageContent>
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

const mapStateToProps = (state) => ({
  films: getFilms(state),
  reviews: state.data.reviews,
  activeFilm: getActiveFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPageLoad(id) {
    dispatch(fetchSingleFilm(id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Film));


