import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addFavorite} from "../../store/api-actions";

const NotInList = {
  XLINK: `#add`,
  NAME: `My list`,
};

const InList = {
  XLINK: `#in-list`,
  NAME: `In list`
};

const ButtonAddToList = (props) => {
  const {id, isFavorite, isPromo, onFavoriteClick} = props;
  const handleClick = () => {
    onFavoriteClick(id, !isFavorite ? 1 : 0, isPromo);
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

ButtonAddToList.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPromo: PropTypes.bool.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(id, status, isPromo) {
    dispatch(addFavorite(id, status, isPromo));
  },
});

export {ButtonAddToList};
export default connect(null, mapDispatchToProps)(ButtonAddToList);
