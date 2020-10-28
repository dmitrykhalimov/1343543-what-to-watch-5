import React from "react";
import PropTypes from "prop-types";

const FilmsCatalog = (props) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {props.children}
    </section>
  );
};

FilmsCatalog.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.string.isRequired]).isRequired
  )};

export default FilmsCatalog;
