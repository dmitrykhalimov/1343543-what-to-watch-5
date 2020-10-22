import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import films from "../src/mocks/films";
import reviews from "../src/mocks/reviews";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const DetailsPromo = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`,
};

ReactDOM.render(
    <Provider store={store}>
      <App
        title = {DetailsPromo.TITLE}
        genre = {DetailsPromo.GENRE}
        year = {DetailsPromo.YEAR}
        films = {films}
        reviews = {reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
