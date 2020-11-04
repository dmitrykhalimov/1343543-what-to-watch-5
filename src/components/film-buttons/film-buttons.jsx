import React from "react";
import PropTypes from "prop-types";
import ButtonPlay from "../button-play/button-play";
import ButtonAddToList from "../button-add-to-list/button-add-to-list";

const FilmButtons = (props) => {
  const {id} = props;
  return (
    <div className="movie-card__buttons">
      <ButtonPlay
        id = {id}
      />
      <ButtonAddToList />
    </div>
  );
};

FilmButtons.propTypes = {
  id: PropTypes.number.isRequired,
};

export default FilmButtons;
