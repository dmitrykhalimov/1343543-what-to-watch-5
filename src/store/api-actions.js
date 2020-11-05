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
      // TODO редирект на страницу PageError или открыть попап
      throw Error(ErrorMessage.FETCH_FILMS_LIST_FAIL);
    })
);

export const fetchSingleFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIPath.films}/${id}`)
    .then((film) => {
      dispatch(loadSingleFilm(singleFilmAdapter(film.data)));
    })
    .catch(() => {
      // TODO -//-
      throw Error(ErrorMessage.FETCH_SINGLE_FILM_FAIL);
    })
);

export const fetchFilmPromo = () => (dispatch, _getState, api) => (
  api.get(APIPath.promo)
    .then((film) => {
      dispatch(loadFilmPromo(singleFilmAdapter(film.data)));
    })
    .catch(() => {
      // TODO -//-
      throw Error(ErrorMessage.FETCH_PROMO_FAIL);
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIPath.comments}/${id}`)
    .then((comments) => {
      dispatch(loadFilmComments(comments.data));
    })
    .catch(() => {
      // TODO -//-
      throw Error(ErrorMessage.FETCH_COMMENTS_FAIL);
    })
);

export const fetchFilmPage = (id) => (dispatch, _getState, api) => (
  api.get(`${APIPath.films}/${id}`)
    .then((film) => {
      dispatch(loadSingleFilm(singleFilmAdapter(film.data)));
    })
    .then(() => {
      api.get(`${APIPath.comments}/${id}`)
      .then((comments) => {
        dispatch(loadFilmComments(comments.data));
      })
      .catch(() => {
        // TODO -//-
        throw Error(ErrorMessage.FETCH_COMMENTS_FAIL);
      });
    })
    .catch(() => {
      // TODO -//-
      throw Error(ErrorMessage.FETCH_SINGLE_FILM_FAIL);
    })
);
export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`${APIPath.favorite}`)
    .then((favorite) => {
      dispatch(loadFavorites(filmsAdapter(favorite.data)));
    })
    .catch(() => {
    // TODO -//-
      throw Error(ErrorMessage.FETCH_FAVORITES_FAIL);
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
export const login = ({email, password}, handleError) => (dispatch, _getState, api) => (
  api.post(APIPath.login, {email, password})
    .then((response) => userDataToClient(response.data))
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
        dispatch(loadFilmPromo(singleFilmAdapter(response.data)));
      } else {
        dispatch(loadSingleFilm(singleFilmAdapter(response.data)));
      }
    })
    .catch(() => {
      throw Error(`Ошибка авторизации`);
    })
);
