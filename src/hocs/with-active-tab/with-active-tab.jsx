import React, {PureComponent} from 'react';
import FilmOverview from '../../components/film-overview/film-overview';
import FilmDetails from '../../components/film-details/film-details';
import FilmReviews from '../../components/film-reviews/film-reviews';
import {validFilm, validReview} from "../../utils/props";

const Tab = {
  OVERVIEW: `OVERVIEW`,
  DETAILS: `DETAILS`,
  REVIEWS: `REVIEWS`,
};

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: Tab.OVERVIEW,
      };

      this.handleSwitchTab = this.handleSwitchTab.bind(this);
    }

    handleSwitchTab(tabName) {
      this.setState({
        activeTab: tabName
      });
    }

    renderTab() {
      const {film, review} = this.props;
      const activeTab = this.state.activeTab;
      switch (activeTab) {
        case Tab.OVERVIEW:
          return <FilmOverview
            film={film}
          />;
        case Tab.DETAILS:
          return <FilmDetails
            film={film}
          />;
        case Tab.REVIEWS:
          return <FilmReviews
            review={review}
          />;
      }
      return null;
    }

    render() {
      const {film} = this.props;
      return <Component
        {...this.props}
        tabs = {Tab}
        poster = {film.poster}
        activeTab = {this.state.activeTab}
        tabToRender = {this.renderTab()}
        onSwitchTab = {this.handleSwitchTab}
      />;
    }
  }

  WithActiveTab.propTypes = {
    film: validFilm,
    review: validReview,
  };
  return WithActiveTab;
};

export default withActiveTab;
