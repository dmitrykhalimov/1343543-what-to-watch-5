import React from "react";
import renderer from "react-test-renderer";
import {Film} from "./film";
import {TEST_MOCKS, TEST_MOCK_STORE, TEST_MOCK_USER} from "../../const";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`Film`, () => {
  it(`Should Film render correctly, isFavorite`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Film
              id={TEST_MOCKS.id}
              isPromo={TEST_MOCKS.boolTrue}
              userData={TEST_MOCK_USER}
              isFavorite={TEST_MOCKS.boolTrue}
              onPlayClick={TEST_MOCKS.noop}
              handlePageLoad={TEST_MOCKS.noop}
              handlePageExit={TEST_MOCKS.noop}
              comments={TEST_MOCKS.comments}
              films={TEST_MOCKS.films}
              activeFilm={TEST_MOCKS.film}
              match={TEST_MOCKS.match}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should Film render correctly, !isFavorite`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Film
              id={TEST_MOCKS.id}
              isPromo={TEST_MOCKS.boolTrue}
              userData={TEST_MOCK_USER}
              isFavorite={TEST_MOCKS.boolFalse}
              onPlayClick={TEST_MOCKS.noop}
              handlePageLoad={TEST_MOCKS.noop}
              handlePageExit={TEST_MOCKS.noop}
              comments={TEST_MOCKS.comments}
              films={TEST_MOCKS.films}
              activeFilm={TEST_MOCKS.film}
              match={TEST_MOCKS.match}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
