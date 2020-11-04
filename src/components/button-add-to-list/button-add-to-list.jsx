import React from "react";

const NotInList = {
  XLINK: `#add`,
  NAME: `My list`,
};

const InList = {
  XLINK: `#in-list`,
  NAME: `In list`
};

const ButtonAddToList = (props) => {
  const {id, isFavorite} = props;
  let testValue = true;
  const handleClick = () => {
    testValue = !testValue;
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      onClick={handleClick}
      type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={testValue ? InList.XLINK : NotInList.XLINK}></use>
      </svg>
      <span>{testValue ? InList.NAME : NotInList.NAME}</span>
    </button>
  );
};

ButtonAddToList.propTypes = {};

export default ButtonAddToList;
