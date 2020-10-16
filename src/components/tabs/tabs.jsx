import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {validFilm, validReview} from "../../utils/props";
import FilmOverview from "../film-overview/film-overview";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: `OVERVIEW`,
    };

    this.handleSwitchTab = this.handleSwitchTab.bind(this);
  }

  handleSwitchTab(evt) {
    evt.preventDefault();
    console.log(evt.target);
    this.setState({
      activeTab: (evt.target.getAttribute(`data-name`).toUpperCase())
    });
  }

  renderSwitch() {
    const {film} = this.props;
    const activeTab = this.state.activeTab;
    switch (activeTab) {
      case `OVERVIEW`:
        return <FilmOverview
          film={film}
        />;
      case `DETAILS`:
        return <FilmDetails
          film={film}
        />;
      case `REVIEWS`:
        return <FilmReviews
          film={film}
        />;
    }
    return null;
  }

  render() {
    const {film, review, onPlayClick} = this.props;
    const activeTab = this.state.activeTab;

    const Tab = {
      OVERVIEW: `OVERVIEW`,
      DETAILS: `DETAILS`,
      REVIEWS: `REVIEWS`,
    };

    return (
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={film.poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">
            <ul className="movie-nav__list">
              <li
                className="movie-nav__item movie-nav__item--active"
                onClick={this.handleSwitchTab}
              >
                <a href="#" data-name="OVERVIEW" className="movie-nav__link">Overview</a>
              </li>
              <li className="movie-nav__item" onClick={this.handleSwitchTab}>
                <a href="#" data-name="details" className="movie-nav__link">Details</a>
              </li>
              <li className="movie-nav__item" onClick={this.handleSwitchTab}>
                <a href="#" data-name="reviews" className="movie-nav__link">Reviews</a>
              </li>
            </ul>
          </nav>

          {this.renderSwitch()}
        </div>
      </div>

    );
  }
}

Tabs.PropTypes = {
  film: validFilm,
  review: validReview,
};

export default Tabs;


