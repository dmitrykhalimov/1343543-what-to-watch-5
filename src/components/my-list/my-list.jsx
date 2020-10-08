import React from "react";
import PropTypes from "prop-types";
import SmallFilmCard from "../small-movie-card/smaill-movie-card";
import {validFilm} from "../../utils/props";

const MyList = (props) => {
  const {films} = props;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {/* по отображению, MyList полностью дублирует FilmsList, но т.к. логика отображения будет другой, я не стал переиспользовать компонент FilmsList*, а вот SmallMovieCard можно переиспользовать вполне */}
        <div className="catalog__movies-list">
          {/* т.к. в ТЗ нет ограничений на количество фильмов в MyList, то можно не использовать цикл, а итерироваться по всему массиву */}
          {films.map((film) => {
            return <SmallFilmCard
              key = {film.id}
              preview = {film.preview}
              title = {film.title}
              id = {film.id}
              // неясно должен ли быть предпросмотр в MyList, поэтому отправил пустую функцию, чтобы не переписывать этот компонент под классовый
              handleHover = {() => {
                return ``;
              }} />;
          })}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default MyList;

MyList.propTypes = {
  films: PropTypes.arrayOf(validFilm).isRequired,
};
