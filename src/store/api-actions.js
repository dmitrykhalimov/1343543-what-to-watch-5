import {loadFilms, createGenres, requireAuthorization, loadUserData} from "./action";
import {filmsAdapter, userDataToClient} from "../services/adapter";
import {AuthorizationStatus} from "../const";

// загрузка списка фильмов
export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => filmsAdapter(data))
    .then((films) => {
      dispatch(loadFilms(films));
      dispatch(createGenres(films));
    })
    .catch(() => {
      throw Error(`Ошибка загрузки списка фильмов`);
    })
);

// проверка есть ли авторизация
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
    .catch(() => {
      throw Error(`Ошибка связи с сервером`);
    })
);

// авторизация
export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((response) => userDataToClient(response.data))
    .then((data) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserData(data));
    })
    .catch(() => {
      throw Error(`Ошибка авторизации`);
    })
);
