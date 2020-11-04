import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppPath} from "../../const";

const ButtonAddReview = (props) => {
  const {id} = props;
  return (
    <Link className="btn movie-card__button" to={`${id}/${AppPath.review}`}>
      Add review
    </Link>
  );
};

ButtonAddReview.propTypes = {
  id: PropTypes.number.isRequired,
};


export default ButtonAddReview;
