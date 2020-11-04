import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import ErrorPage from "./components/error-page/error-page";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/action";
import {fetchFilmsList, checkAuth, fetchFilmPromo, fetchFavorites} from "./store/api-actions";
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
  store.dispatch(fetchFilmPromo()),
  store.dispatch(fetchFavorites()),
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
// Сбросить фильм при DidUnmount
// Почему перерисовывается 4 раза?
// ActiveTab - не возвращается по умолчанию
// checkAuth очень странно работает
// переписать на HOC-компонент formReview
// блокировка экрана при отправке комментариев
// не стал писать адаптер.
// не отображается avatar.
// Refactor: propslibrary
// * подумать, нет ли возможности заменить history на Redirect в film.
// * сделать разные коды ошибки
