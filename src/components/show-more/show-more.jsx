import React from "react";
import PropTypes from "prop-types";
import {copmuteIncrement} from "../../core"

const ShowMore = (props) => {
  const {rendered, filmsQuantity, onShowMore} = props;
  const increment = copmuteIncrement(rendered, filmsQuantity);
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        onClick={() => {
          onShowMore(increment);
        }}
        type="button">Show more
      </button>
    </div>
  );
};

export default ShowMore;
