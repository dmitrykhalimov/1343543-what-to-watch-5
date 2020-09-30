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
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
