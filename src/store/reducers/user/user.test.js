import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";

import {ActionType} from "../../action";
import {checkAuth} from "../../api-actions";
import {APIPath, AuthorizationStatus} from "../../../const";
import {userDataToClient} from "../../../services/adapter";

const api = createAPI(() => {});

// т.к. с сервера приходит результат в camel-case, приходится мокать его именно в кэмел-кейсе
/* eslint-disable camelcase */
const mockUserDataServerStyle = {
  avatar_url: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
  email: `sfsdf@mail.ru`,
  id: 1,
  name: `sfsdf`,
};

const apiMock = new MockAdapter(api);

describe(`Async user-reducer operation work correctly`, () => {
  it(`Should make a correct authorizationCheck when 200`, () => {
    const dataMock = mockUserDataServerStyle;
    const dispatch = jest.fn();
    const userDataLoader = checkAuth();

    apiMock
      .onGet(APIPath.login)
      .reply(200, dataMock);

    return userDataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER_DATA,
          payload: userDataToClient(dataMock),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct authorizationCheck when 401`, () => {
    const dispatch = jest.fn();
    const userDataLoader = checkAuth();

    apiMock
      .onGet(APIPath.login)
      .reply(401, undefined);

    return userDataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        });
      });
  });

  // it(`Should make a correct API call to /films/id`, () => {
  //   const id = 1;
  //   const dataMock = mockFilmServerStyle;
  //   const dispatch = jest.fn();
  //   const filmLoader = fetchSingleFilm(id);

  //   apiMock
  //     .onGet(`${APIPath.films}/${id}`)
  //     .reply(200, dataMock);

  //   return filmLoader(dispatch, () => {}, api)
  //     .then(() => {
  //       expect(dispatch).toHaveBeenCalledTimes(1);
  //       expect(dispatch).toHaveBeenNthCalledWith(1, {
  //         type: ActionType.LOAD_SINGLE_FILM,
  //         payload: singleFilmAdapter(dataMock),
  //       });
  //     });
  // });

  // it(`Should make a correct API call to /films/promo`, () => {
  //   const dataMock = mockFilmServerStyle;
  //   const dispatch = jest.fn();
  //   const promoLoader = fetchFilmPromo();

  //   apiMock
  //     .onGet(APIPath.promo)
  //     .reply(200, dataMock);

  //   return promoLoader(dispatch, () => {}, api)
  //     .then(() => {
  //       expect(dispatch).toHaveBeenCalledTimes(1);
  //       expect(dispatch).toHaveBeenNthCalledWith(1, {
  //         type: ActionType.LOAD_FILM_PROMO,
  //         payload: singleFilmAdapter(dataMock),
  //       });
  //     });
  // });

  // it(`Should make a correct API call to /films/comments/id`, () => {
  //   const id = 1;
  //   const dataMock = [TEST_MOCK_COMMENT];
  //   const dispatch = jest.fn();
  //   const filmLoader = fetchComments(id);

  //   apiMock
  //     .onGet(`${APIPath.comments}/${id}`)
  //     .reply(200, dataMock);

  //   return filmLoader(dispatch, () => {}, api)
  //     .then(() => {
  //       expect(dispatch).toHaveBeenCalledTimes(1);
  //       expect(dispatch).toHaveBeenNthCalledWith(1, {
  //         type: ActionType.LOAD_FILM_COMMENTS,
  //         payload: dataMock,
  //       });
  //     });
  // });

  // it(`Should make a correct API call to /films/favorites`, () => {
  //   const dataMock = [mockFilmServerStyle];
  //   const dispatch = jest.fn();
  //   const favoritesLoader = fetchFavorites();

  //   apiMock
  //     .onGet(APIPath.favorite)
  //     .reply(200, dataMock);

  //   return favoritesLoader(dispatch, () => {}, api)
  //     .then(() => {
  //       expect(dispatch).toHaveBeenCalledTimes(1);
  //       expect(dispatch).toHaveBeenNthCalledWith(1, {
  //         type: ActionType.LOAD_FAVORITES,
  //         payload: filmsAdapter(dataMock),
  //       });
  //     });
  // });
});
