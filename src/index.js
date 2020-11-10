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

// Final issues:

// 1. При попытке добавить фильм в избранное будучи незалогиненным, в консоль падает 401. Я хотел реализовать попап - но в ТЗ про это ничего не сказано я решил не городить огород.
// 2. Из эстетических соображений добавил 404 и редирект на нее.
// 3. По-прежнему 5 раз (!) перерисовывается страница film. 2 раза из-за withrouter, 2 раза из-за connect (подгрузка комментариев, и данных фильма)
// в теории можно заморочиться: переписать на функциональный компонент, вдруг хуки что-то дадут? Или попытаться переколхозить axios, на axios.all, чтобы комментарии и фильм загружались в хранилище одним паком.
// Но желания переписывать api нет никакого, а хуки вряд ли решат проблему.
// 4. Б26!!!
// 5. Не сбрасывается ActiveTab.
