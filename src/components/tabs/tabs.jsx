import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {onSwitchTab, tabToRender, poster, activeTab, tabs} = this.props;

    const tabValues = Object.values(tabs);
    return (
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">
            <ul className="movie-nav__list">
              {tabValues.map((item, index) => {
                return (
                  <li
                    key = {index}
                    className={activeTab === item ? `movie-nav__item movie-nav__item--active` : `movie-nav__item` }
                    onClick={(evt) => {
                      evt.preventDefault();
                      onSwitchTab(item);
                    }}
                  >
                    <a href="#" className="movie-nav__link">{item.charAt(0) + item.slice(1).toLowerCase()}</a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {tabToRender}
        </div>
      </div>

    );
  }
}

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onSwitchTab: PropTypes.func.isRequired,
  tabToRender: PropTypes.element.isRequired,
  poster: PropTypes.string.isRequired,
  tabs: PropTypes.shape({
    OVERVIEW: PropTypes.string.isRequired,
    DETAILS: PropTypes.string.isRequired,
    REVIEWS: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tabs;


