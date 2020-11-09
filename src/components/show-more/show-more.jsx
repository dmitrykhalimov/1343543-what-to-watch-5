import React from "react";
import PropTypes from "prop-types";
import {computeIncrement} from "../../core";

const ShowMore = (props) => {
  const {rendered, filmsQuantity, onShowMore} = props;
  const increment = computeIncrement(rendered, filmsQuantity);
  const handleShowMoreClick = () => {
    onShowMore(increment);
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        onClick={handleShowMoreClick}
        type="button">Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  rendered: PropTypes.number.isRequired,
  filmsQuantity: PropTypes.number.isRequired,
  onShowMore: PropTypes.func.isRequired,
};

export {ShowMore};
export default React.memo(ShowMore);
