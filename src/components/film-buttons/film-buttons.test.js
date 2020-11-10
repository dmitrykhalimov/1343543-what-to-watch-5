import React from "react";
import renderer from "react-test-renderer";
import {FilmButtons} from "./film-buttons";
import {TEST_MOCKS, TEST_MOCK_STORE} from "../../const";
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
              id={1}
              isPromo={true}
              userData={TEST_MOCKS.userData}
              isFavorite={true}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
