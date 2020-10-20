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
  children: PropTypes.array.isRequired
};

export default ReviewColumn;
