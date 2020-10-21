import React from "react";
import PropTypes from "prop-types";

const ReviewColumn = (props) => {

  return (
    <div className="movie-card__reviews-col">
      {props.children}
    </div>
  );
};

ReviewColumn.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired
};

export default ReviewColumn;
