import React, {useEffect, useState} from "react";
import FilmOverview from '../../components/film-overview/film-overview';
import FilmDetails from '../../components/film-details/film-details';
import FilmReviews from '../../components/film-reviews/film-reviews';
import {validComments, validFilm} from "../../utils/props";

const Tab = {
  OVERVIEW: `OVERVIEW`,
  DETAILS: `DETAILS`,
  REVIEWS: `REVIEWS`,
};

const Tabs = (props) => {
  const {film, comments} = props;
  const tabs = Object.values(Tab);

  const [activeTab, setState] = useState(Tab.OVERVIEW);
  const [activeFilm, setActive] = useState(552);

  const handleSwitchTab = (tabName) => {
    setState(tabName);
  };

  useEffect(() => {
    if (activeFilm !== film.id) {
      setActive(film.id);
      setState(Tab.OVERVIEW);
    }
  });

  const renderTab = () => {
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
  };

  return (
    <div className="movie-card__info">
      <div className="movie-card__poster movie-card__poster--big">
        <img src={film.poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
      </div>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((item, index) => {
              return (
                <li
                  key = {index}
                  className={activeTab === item ? `movie-nav__item movie-nav__item--active` : `movie-nav__item` }
                  onClick={(evt) => {
                    evt.preventDefault();
                    handleSwitchTab(item);
                  }}
                >
                  <a href="#" className="movie-nav__link">{item.charAt(0) + item.slice(1).toLowerCase()}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        {renderTab()}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  film: validFilm,
  comments: validComments,
};

export default Tabs;


