import React, {PureComponent} from 'react';
import FilmOverview from '../../components/film-overview/film-overview';
import FilmDetails from '../../components/film-details/film-details';
import FilmReviews from '../../components/film-reviews/film-reviews';
import {validComments, validFilm} from "../../utils/props";

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

    // TODO - работает, хотя и не должно. Перед защитой подумать о более изящном решении
    componentDidUpdate(prevProps) {
      // если перешли на другой фильм, сбросить табу на Overview
      const prevId = prevProps.film.id;
      const {id} = this.props.film;
      if (prevId !== id) {
        this.handleSwitchTab(Tab.OVERVIEW);
      }
    }

    renderTab() {
      const {film, comments} = this.props;
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
            comments={comments}
          />;
      }
      return null;
    }

    render() {
      const {film} = this.props;
      return <Component
        {...this.props}
        tabs = {Object.values(Tab)}
        poster = {film.poster}
        activeTab = {this.state.activeTab}
        tabToRender = {this.renderTab()}
        onSwitchTab = {this.handleSwitchTab}
      />;
    }
  }

  WithActiveTab.propTypes = {
    film: validFilm,
    comments: validComments,
  };
  return WithActiveTab;
};

export default withActiveTab;
