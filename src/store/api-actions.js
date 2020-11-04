import {loadFilms, createGenres, requireAuthorization, loadUserData, redirectToRoute, loadSingleFilm} from "./action";
import {filmsAdapter, userDataToClient, singleFilmAdapter} from "../services/adapter";
import {AuthorizationStatus, AppPath, APIPath} from "../const";

// загрузка списка фильмов
export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIPath.films)
    .then(({data}) => filmsAdapter(data))
    .then((films) => {
      dispatch(loadFilms(films));
      dispatch(createGenres(films));
    })
    .catch(() => {
      throw Error(`Ошибка загрузки списка фильмов`);
    })
);

export const fetchSingleFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIPath.films}/${id}`)
    // .then(({data}) => filmsAdapter(data))
    .then((film) => {
      dispatch(loadSingleFilm(singleFilmAdapter(film.data)));
    })
    .catch(() => {
      // TODO redirect на Error
      throw Error(`Ошибка загрузки списка фильмов`);
    })
);

// проверка есть ли авторизация
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIPath.login)
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
    .catch(() => {
      throw Error(`Ошибка связи с сервером`);
    })
);

// авторизация
export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIPath.login, {email, password})
    .then((response) => userDataToClient(response.data))
    .then((data) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserData(data));
    })
    .then(() => dispatch(redirectToRoute(AppPath.index)))
    .catch(() => {
      throw Error(`Ошибка авторизации`);
    })
);
