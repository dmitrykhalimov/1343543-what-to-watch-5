import React from "react";
import {connect} from "react-redux";
import { addFavorite } from "../../store/api-actions";

const NotInList = {
  XLINK: `#add`,
  NAME: `My list`,
};

const InList = {
  XLINK: `#in-list`,
  NAME: `In list`
};

const ButtonAddToList = (props) => {
  const {id, isFavorite, onFavoriteClick} = props;
  const handleClick = () => {
    onFavoriteClick(id, !isFavorite ? 1 : 0);
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      onClick={handleClick}
      type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? InList.XLINK : NotInList.XLINK}></use>
      </svg>
      <span>{isFavorite ? InList.NAME : NotInList.NAME}</span>
    </button>
  );
};

ButtonAddToList.propTypes = {};

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(id, status) {
    dispatch(addFavorite(id, status));
  },
});

export default connect(null, mapDispatchToProps)(ButtonAddToList);
