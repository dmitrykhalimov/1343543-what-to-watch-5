import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = () => {
  const divStyle = {
    maxWidth: `650px`,
  };

  const pStyle = {
    fontSize: `35px`,
    lineHeight: `50px`,
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <h1 className="page-title user-page__title visually-hidden">Error loading error</h1>
      </header>

      <div className="sign-in user-page__content" style={divStyle}>
        <p style={pStyle}>
          Произошла ошибка загрузки данных с сервера.
        </p>
        <p style={pStyle}>
          Пожалуйста, повторите попытку позже.
        </p>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2020 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

ErrorMessage.propTypes = {
  isLight: PropTypes.bool,
};

export default ErrorMessage;
