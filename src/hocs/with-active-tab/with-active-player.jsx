import React, {PureComponent} from 'react';
import FilmOverview from '../../components/film-overview/film-overview';
import FilmDetails from '../../components/film-details/film-details';
import FilmReviews from '../../components/film-reviews/film-reviews';
import {validFilm, validReview} from "../../utils/props";


const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

    }


    render() {
      return <Component
        {...this.props}
        // tabs = {Object.values(Tab)}
        // poster = {film.poster}
        // activeTab = {this.state.activeTab}
        // tabToRender = {this.renderTab()}
        // onSwitchTab = {this.handleSwitchTab}
      />;
    }
  }

  WithActivePlayer.propTypes = {
    film: validFilm,
    review: validReview,
  };
  return WithActivePlayer;
};

export default withActivePlayer;
