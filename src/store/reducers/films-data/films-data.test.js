
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {filmsData} from "./films-data";
import {ActionType} from "../../action";
import {fetchFilmsList, fetchSingleFilm, fetchFavorites, fetchFilmPromo, fetchComments} from "../../api-actions";
import {APIPath, TEST_MOCK_COMMENT} from "../../../const";
import {filmsAdapter, singleFilmAdapter} from "../../../services/adapter";
import {ACTIVE_FILM_INITIAL_STATE} from "../../../const";

const api = createAPI(() => {});

// т.к. с сервера приходит результат в camel-case, приходится мокать его именно в кэмел-кейсе
/* eslint-disable camelcase */
const mockFilmServerStyle = {
  background_color: ``,
  background_image: ``,
  description: `I hate tests.`,
  director: ``,
  genre: ``,
  id: 1,
  is_favorite: true,
  name: ``,
  poster_image: ``,
  preview_image: ``,
  preview_video_link: ``,
  rating: 3.6,
  released: 2008,
  run_time: 92,
  scores_count: 0,
  starring: [``, ``, ``],
  video_link: ``,
};

const initialState = {
  films: [],
  filteredFilms: [],
  genresList: [],
  activeFilm: ACTIVE_FILM_INITIAL_STATE,
  activeComments: [],
  filmPromo: [],
  favorites: [],
};

describe(`Sync operation work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsData(void 0, {})).toEqual(initialState);
  });
  it(`ERASE_ACTIVE_FILM film changes activeFilm to the initial state`, () => {
    expect(filmsData(initialState, {
      type: ActionType.ERASE_ACTIVE_FILM
    })).toEqual(initialState);
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dataMock = [mockFilmServerStyle]; //
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();

    apiMock
      .onGet(`films`)
      .reply(200, dataMock);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: filmsAdapter(dataMock),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CREATE_GENRES,
          payload: filmsAdapter(dataMock),
        });
      });
  });
  it(`Should make a correct API call to /films/id`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dataMock = mockFilmServerStyle;
    const dispatch = jest.fn();
    const filmLoader = fetchSingleFilm(id);

    apiMock
      .onGet(`${APIPath.films}/${id}`)
      .reply(200, dataMock);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SINGLE_FILM,
          payload: singleFilmAdapter(dataMock),
        });
      });
  });
  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dataMock = mockFilmServerStyle;
    const dispatch = jest.fn();
    const promoLoader = fetchFilmPromo();

    apiMock
      .onGet(APIPath.promo)
      .reply(200, dataMock);

    return promoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM_PROMO,
          payload: singleFilmAdapter(dataMock),
        });
      });
  });
  it(`Should make a correct API call to /films/comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dataMock = [TEST_MOCK_COMMENT];
    const dispatch = jest.fn();
    const filmLoader = fetchComments(id);

    apiMock
      .onGet(`${APIPath.comments}/${id}`)
      .reply(200, dataMock);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM_COMMENTS,
          payload: dataMock,
        });
      });
  });
  it(`Should make a correct API call to /films/favorites`, () => {
    const apiMock = new MockAdapter(api);
    const dataMock = [mockFilmServerStyle];
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavorites();

    apiMock
      .onGet(APIPath.favorite)
      .reply(200, dataMock);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: filmsAdapter(dataMock),
        });
      });
  });
});
