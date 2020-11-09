import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import ErrorPage from "./components/error-page/error-page";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/action";
import {fetchFilmsList, checkAuth, fetchFilmPromo} from "./store/api-actions";
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
  store.dispatch(checkAuth()),
  store.dispatch(fetchFilmPromo()),
  store.dispatch(fetchFilmsList()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
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

// TODO:

// * 50 символов и 400 символов
// * блокировка экрана при отправке комментариев

// * убрать возможность без авторизации лайкать фильмы (вылезает 401)
// * подумать, нет ли возможности заменить history на Redirect в film.
// * зарефакторить футер - isLight не нужен
// * Почему перерисовывается 5 раз?
// * зарефакторить propslibrary

// * редирект если фильм 400
