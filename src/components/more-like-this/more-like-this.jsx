import React from "react";
import PropTypes from "prop-types";

const MoreLikeThis = (props) => {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      {props.children}
    </section>
  );
};

MoreLikeThis.propTypes = {
  children: PropTypes.element.isRequired};

export default MoreLikeThis;
