import {loadFilms, createGenres, requireAuthorization} from "./action";
import {filmsAdapter} from "../services/adapter";
import {AuthorizationStatus} from "../const";

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

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {
      throw Error(`Ошибка связи с сервером`);
    })
);

// задел на будущее

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);
