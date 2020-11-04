import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import ErrorPage from "./components/error-page/error-page";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/action";
import {fetchFilmsList, checkAuth} from "./store/api-actions";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {AuthorizationStatus} from "./const";
import {composeWithDevTools} from "redux-devtools-extension";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchFilmsList()),
  store.dispatch(checkAuth()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          title = {DetailsPromo.TITLE}
          genre = {DetailsPromo.GENRE}
          year = {DetailsPromo.YEAR}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
})
.catch(() => {
  ReactDOM.render(
      <ErrorPage></ErrorPage>,
      document.querySelector(`#root`)
  );
});

const DetailsPromo = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`,
};

// TODO:
// Сбросить фильм при DidUnmount
// Почему перерисовывается 4 раза?
// ActiveTab - не возвращается по умолчанию
// checkAuth очень странно работает
// переписать на HOC-компонент formReview
