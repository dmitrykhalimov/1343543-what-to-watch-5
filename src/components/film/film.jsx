import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import PropTypes from "prop-types";
import {validComments, validFilm} from "../../utils/props";
import Tabs from "../tabs/tabs";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab";
import FilmsList from "../films-list/films-list";
import Footer from "../footer/footer";
import PageContent from "../page-content/page-content";
import MoreLikeThis from "../more-like-this/more-like-this";
import {getActiveFilm, getFilms, getComments} from "../../store/reducers/selectors";
import {fetchComments, fetchSingleFilm} from "../../store/api-actions";
import FilmHeader from "../film-header/film-header";
import FilmTitle from "../film-title/film-title";

const MAX_FILMS_QUANTITY = 4;
const TabsWrapped = withActiveTab(Tabs);

class Film extends PureComponent {
  constructor(props) {
    super(props);

    this._handlePageLoad = props.handlePageLoad;
  }

  // TODO вынести логику в core

  filterFilms(film) {
    return this.props.films.filter((item) => {
      return (item.genre === film.genre) && (item.id !== film.id);
    });
  }

  componentDidMount() {
    this._handlePageLoad(this.props.match.params.id);
  }

  componentDidUpdate() {
    if (Number(this.props.match.params.id) !== this.props.activeFilm.id) {
      this._handlePageLoad(this.props.match.params.id);
    }
  }

  render() {
    const activeFilm = this.props.activeFilm;
    const comments = this.props.comments;
    const similarFilms = this.filterFilms(activeFilm);

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
            <TabsWrapped
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
          <Footer
            isLight={true}
          />
        </PageContent>
      </React.Fragment>
    );
  }
}
Film.propTypes = {
  onPlayClick: PropTypes.func.isRequired,
  handlePageLoad: PropTypes.func.isRequired,
  comments: validComments,
  films: PropTypes.arrayOf(validFilm).isRequired,
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
});

const mapDispatchToProps = (dispatch) => ({
  handlePageLoad(id) {
    dispatch(fetchSingleFilm(id));
    dispatch(fetchComments(id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Film));


