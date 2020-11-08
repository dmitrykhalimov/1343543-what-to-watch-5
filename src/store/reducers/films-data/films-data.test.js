
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
// import {filmsData} from "./films-data";
import {ActionType} from "../../action";
import {fetchFilmsList, fetchSingleFilm, fetchFilmPromo} from "../../api-actions";
import {APIPath, TEST_MOCKS} from "../../../const";
import {filmsAdapter, singleFilmAdapter} from "../../../services/adapter";

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
// const questions = [
//   {
//     type: `genre`,
//     genre: `rock`,
//     answers: [{
//       src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
//       genre: `rock`,
//     }, {
//       src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
//       genre: `blues`,
//     }, {
//       src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
//       genre: `jazz`,
//     }, {
//       src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
//       genre: `rock`,
//     }],
//   }, {
//     type: `artist`,
//     song: {
//       artist: `Jim Beam`,
//       src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
//     },
//     answers: [{
//       picture: `https://api.adorable.io/avatars/128/A`,
//       artist: `John Snow`,
//     }, {
//       picture: `https://api.adorable.io/avatars/128/AB`,
//       artist: `Jack Daniels`,
//     }, {
//       picture: `https://api.adorable.io/avatars/128/AC`,
//       artist: `Jim Beam`,
//     }],
//   },
// ];


// it(`Reducer without additional parameters should return initial state`, () => {
//   expect(ашдь(void 0, {})).toEqual({
//     questions: [],
//   });
// });

// it(`Reducer should update questions by load questions`, () => {
//   expect(gameData({
//     questions: [],
//   }, {
//     type: ActionType.LOAD_QUESTIONS,
//     payload: questions,
//   })).toEqual({
//     questions,
//   });
// });

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
});
