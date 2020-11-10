import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import PropTypes from "prop-types";
import {validComments, validFilm} from "../../utils/props";
import Tabs from "../tabs/tabs";
import FilmsList from "../films-list/films-list";
import Footer from "../footer/footer";
import PageContent from "../page-content/page-content";
import MoreLikeThis from "../more-like-this/more-like-this";
import {getActiveFilm, getFilms, getComments, getSimilarFilms} from "../../store/reducers/selectors";
import {fetchComments, fetchSingleFilm} from "../../store/api-actions";
import FilmHeader from "../film-header/film-header";
import FilmTitle from "../film-title/film-title";
import {eraseActiveFilm} from "../../store/action";

const MAX_FILMS_QUANTITY = 4;

class Film extends PureComponent {
  constructor(props) {
    super(props);

    this._onPageLoad = props.onPageLoad;
    this._onPageExit = props.onPageExit;

    this._onPageLoad = this._onPageLoad.bind(this);
    this._onPageExit = this._onPageExit.bind(this);
  }

  componentDidMount() {
    this._onPageLoad(this.props.match.params.id);
  }

  componentDidUpdate() {
    if (Number(this.props.match.params.id) !== this.props.activeFilm.id) {
      this._onPageLoad(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this._onPageExit();
  }

  render() {
    const activeFilm = this.props.activeFilm;
    const comments = this.props.comments;
    const similarFilms = this.props.similarFilms;

    const backgroundStyle = {
      backgroundColor: activeFilm.backgroundColor,
    };
    return (
      <React.Fragment>
        <section className="movie-card movie-card--full" style={backgroundStyle}>
          <div className="movie-card__hero">
            <FilmHeader
              background = {activeFilm.background}
              title = {activeFilm.title}
            />
            <div className="movie-card__wrap">
              <FilmTitle
                title = {activeFilm.title}
                genre = {activeFilm.genre}
                year = {activeFilm.year}
                id = {activeFilm.id}
                isFavorite = {activeFilm.isFavorite}
              />
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <Tabs
              film = {activeFilm}
              comments = {comments}
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
          <Footer/>
        </PageContent>
      </React.Fragment>
    );
  }
}
Film.propTypes = {
  onPageLoad: PropTypes.func.isRequired,
  onPageExit: PropTypes.func.isRequired,
  comments: validComments,
  films: PropTypes.arrayOf(validFilm).isRequired,
  similarFilms: PropTypes.arrayOf(validFilm).isRequired,
  activeFilm: validFilm,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  comments: getComments(state),
  activeFilm: getActiveFilm(state),
  similarFilms: getSimilarFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPageLoad(id) {
    dispatch(fetchSingleFilm(id));
    dispatch(fetchComments(id));
  },
  onPageExit() {
    dispatch(eraseActiveFilm());
  }
});

export {Film};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Film));


