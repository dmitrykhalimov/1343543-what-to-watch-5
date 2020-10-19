import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const Tab = {
  OVERVIEW: `OVERVIEW`,
  DETAILS: `DETAILS`,
  REVIEWS: `REVIEWS`,
};

class Tabs extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleSwitchTab, tabToRender, poster, activeTab} = this.props;

    return (
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">
            <ul className="movie-nav__list">
              <li
                className={activeTab === Tab.OVERVIEW ? `movie-nav__item movie-nav__item--active` : `movie-nav__item` }
                onClick={handleSwitchTab}
              >
                <a href="#" data-name="OVERVIEW" className="movie-nav__link">Overview</a>
              </li>
              <li className={activeTab === Tab.DETAILS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item` } onClick={handleSwitchTab}>
                <a href="#" data-name="DETAILS" className="movie-nav__link">Details</a>
              </li>
              <li className={activeTab === Tab.REVIEWS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item` } onClick={handleSwitchTab}>
                <a href="#" data-name="REVIEWS" className="movie-nav__link">Reviews</a>
              </li>
            </ul>
          </nav>

          {tabToRender}
        </div>
      </div>

    );
  }
}

Tabs.propTypes = {
  handleSwitchTab: PropTypes.func.isRequired,
  tabToRender: PropTypes.element.isRequired,
  poster: PropTypes.string.isRequired
};

export default Tabs;


