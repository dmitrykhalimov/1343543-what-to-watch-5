import React from "react";
import renderer from "react-test-renderer";
import FilmTitle from "./film-title";
import {TEST_MOCKS, TEST_MOCK_STORE} from "../../const";
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`FilmTitle`, () => {
  it(`Should FilmTitle render correctly, isPromo, isFavorite`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <FilmTitle
                id={TEST_MOCKS.id}
                year={TEST_MOCKS.year}
                genre={TEST_MOCKS.genre}
                title={TEST_MOCKS.title}
                isPromo={TEST_MOCKS.boolTrue}
                isFavorite={TEST_MOCKS.boolTrue}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`Should FilmTitle render correctly, isPromo, !isFavorite`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <FilmTitle
                id={TEST_MOCKS.id}
                year={TEST_MOCKS.year}
                genre={TEST_MOCKS.genre}
                title={TEST_MOCKS.title}
                isPromo={TEST_MOCKS.boolTrue}
                isFavorite={TEST_MOCKS.boolFalse}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`Should FilmTitle render correctly, !isPromo, isFavorite`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <FilmTitle
                id={TEST_MOCKS.id}
                year={TEST_MOCKS.year}
                genre={TEST_MOCKS.genre}
                title={TEST_MOCKS.title}
                isPromo={TEST_MOCKS.boolFalse}
                isFavorite={TEST_MOCKS.boolTrue}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`Should FilmTitle render correctly, !isPromo, !isFavorite`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <FilmTitle
                id={TEST_MOCKS.id}
                year={TEST_MOCKS.year}
                genre={TEST_MOCKS.genre}
                title={TEST_MOCKS.title}
                isPromo={TEST_MOCKS.boolFalse}
                isFavorite={TEST_MOCKS.boolFalse}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

