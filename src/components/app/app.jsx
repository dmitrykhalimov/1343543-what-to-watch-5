import React from "react";
import PropTypes from "prop-types";
import PageMain from "../page-main/page-main";

const App = (props) => {
  const details = props.details;
  return (
    <PageMain
      details = {details}
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
