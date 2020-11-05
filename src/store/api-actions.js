import {loadFilms, loadFilmComments, createGenres, requireAuthorization, loadUserData, redirectToRoute, loadSingleFilm, loadFilmPromo, loadFavorites} from "./action";
import {filmsAdapter, userDataToClient, singleFilmAdapter} from "../services/adapter";
import {AuthorizationStatus, AppPath, APIPath, ErrorMessage} from "../const";

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

export const fetchFilmPromo = () => (dispatch, _getState, api) => (
  api.get(APIPath.promo)
    .then((film) => {
      dispatch(loadFilmPromo(singleFilmAdapter(film.data)));
    })
    .catch(() => {
      // TODO redirect на Error
      throw Error(`Ошибка загрузки списка фильмов`);
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIPath.comments}/${id}`)
    .then((comments) => {
      dispatch(loadFilmComments(comments.data));
    })
    .catch(() => {
      // TODO redirect на Error
      throw Error(`Ошибка загрузки списка комментариев`);
    })
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`${APIPath.favorite}`)
    .then((favorite) => {
      dispatch(loadFavorites(filmsAdapter(favorite.data)));
    })
    .catch(() => {
      // TODO redirect на Error
      throw Error(`Ошибка загрузки списка комментариев`);
    })
);

// проверка есть ли авторизация
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIPath.login)
    .then((response) => {
      dispatch(loadUserData(userDataToClient(response.data)));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
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

export const addComment = (id, {rating, comment}, handleError) => (dispatch, _getState, api) => (
  api.post(`${APIPath.comments}/${id}`, {rating, comment})
    .then(() => {
      handleError(ErrorMessage.ADD_COMMENT);
      // dispatch(redirectToRoute(`${AppPath.films}/${id}`));
    })
    .catch(() => {
      throw Error(`Ошибка авторизации`);
    })
);

export const addFavorite = (id, status, isPromo) => (dispatch, _getState, api) => (
  api.post(`${APIPath.favorite}/${id}/${status}`)
    .then((response) => {
      if (isPromo) {
        dispatch(loadFilmPromo(singleFilmAdapter(response.data)));
      } else {
        dispatch(loadSingleFilm(singleFilmAdapter(response.data)));
      }
    })
    .catch(() => {
      throw Error(`Ошибка авторизации`);
    })
);
