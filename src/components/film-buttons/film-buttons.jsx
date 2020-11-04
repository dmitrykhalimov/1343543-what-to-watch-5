import React from "react";
import PropTypes from "prop-types";
import ButtonPlay from "../button-play/button-play";
import ButtonAddToList from "../button-add-to-list/button-add-to-list";
import ButtonAddReview from "../button-add-review/button-add-review";

const FilmButtons = (props) => {
  const {id, isPromo} = props;
  return (
    <div className="movie-card__buttons">
      <ButtonPlay
        id = {id}
      />
      <ButtonAddToList />
      {isPromo
        ? ``
        : <ButtonAddReview id = {id}></ButtonAddReview>}
    </div>
  );
};

FilmButtons.propTypes = {
  id: PropTypes.number.isRequired,
  isPromo: PropTypes.bool.isRequired,
};

export default FilmButtons;
