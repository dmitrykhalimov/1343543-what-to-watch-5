import {loadFilms, loadFilmComments, createGenres, requireAuthorization, loadUserData, redirectToRoute, loadSingleFilm, loadFilmPromo, loadFavorites} from "./action";
import {adaptFilmsToClient, adaptUserDataToClient, adaptSingleFilmToClient} from "../services/adapter";
import {AuthorizationStatus, AppPath, APIPath, ErrorMessage} from "../const";

// загрузка списка фильмов
export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIPath.films)
    .then((response) => {
      dispatch(loadFilms(adaptFilmsToClient(response.data)));
      dispatch(createGenres(adaptFilmsToClient(response.data)));
    })
    .catch(() => {
      dispatch(redirectToRoute(AppPath.error));
      throw Error(ErrorMessage.FETCH_FILMS_LIST_FAIL);
    })
);

// загрузка одного фильма
export const fetchSingleFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIPath.films}/${id}`)
    .then((film) => {
      dispatch(loadSingleFilm(adaptSingleFilmToClient(film.data)));
    })
    .catch(() => {
      dispatch(redirectToRoute(AppPath.notFound));
    })
);

// загрузка промо
export const fetchFilmPromo = () => (dispatch, _getState, api) => (
  api.get(APIPath.promo)
    .then((film) => {
      dispatch(loadFilmPromo(adaptSingleFilmToClient(film.data)));
    })
    .catch(() => {
      throw Error(ErrorMessage.FETCH_PROMO_FAIL);
    })
);

// загрузка списка комментариев
export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIPath.comments}/${id}`)
    .then((comments) => {
      dispatch(loadFilmComments(comments.data));
    })
    .catch(() => {
      throw Error(ErrorMessage.FETCH_COMMENTS_FAIL);
    })
);

// загрузка списка избранных
export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`${APIPath.favorite}`)
    .then((favorite) => {
      dispatch(loadFavorites(adaptFilmsToClient(favorite.data)));
    })
    .catch(() => {
      dispatch(redirectToRoute(AppPath.error));
      throw Error(ErrorMessage.FETCH_FAVORITES_FAIL);
    })
);

// проверка есть ли авторизация
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIPath.login)
    .then((response) => {
      dispatch(loadUserData(adaptUserDataToClient(response.data)));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

// авторизация
export const login = ({email, password}, handleError) => (dispatch, _getState, api) => (
  api.post(APIPath.login, {email, password})
    .then((response) => adaptUserDataToClient(response.data))
    .then((data) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUserData(data));
    })
    .then(() => dispatch(redirectToRoute(AppPath.index)))
    .catch((response) => {
      handleError(response.message);
    })
);

// добавить комментарий
export const addComment = (id, {rating, comment}, handleError) => (dispatch, _getState, api) => (
  api.post(`${APIPath.comments}/${id}`, {rating, comment})
    .then(() => {
      dispatch(redirectToRoute(`${AppPath.films}/${id}`));
    })
    .catch((response) => {
      handleError(response.message);
    })
);

// добавить в избранное
export const addFavorite = (id, status, isPromo) => (dispatch, _getState, api) => (
  api.post(`${APIPath.favorite}/${id}/${status}`)
    .then((response) => {
      if (isPromo) {
        dispatch(loadFilmPromo(adaptSingleFilmToClient(response.data)));
      } else {
        dispatch(loadSingleFilm(adaptSingleFilmToClient(response.data)));
      }
    })
    .catch(() => {
      throw Error(ErrorMessage.ADD_FAVORITES_FAIL);
    })
);
