import React from "react";
import renderer from "react-test-renderer";
import {FilmButtons} from "./film-buttons";
import {TEST_MOCKS, TEST_MOCK_STORE, TEST_MOCK_USER} from "../../const";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`FilmButtons`, () => {
  it(`Should FilmButtons render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <FilmButtons
              id={TEST_MOCKS.id}
              isPromo={TEST_MOCKS.boolTrue}
              userData={TEST_MOCK_USER}
              isFavorite={TEST_MOCKS.boolTrue}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
