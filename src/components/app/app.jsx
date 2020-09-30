import React from "react";
import PropTypes from "prop-types";
import PageMain from "../page-main/page-main";

const App = (props) => {
  const {title, genre, year} = props;
  return (
    <PageMain
      title = {title}
      genre = {genre}
      year = {year}
    />
  );
};

export default App;

App.propTypes = {
  details: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    YEAR: PropTypes.string.isRequired,
  })
};
