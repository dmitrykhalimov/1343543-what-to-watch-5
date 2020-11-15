import React from "react";
import renderer from "react-test-renderer";
import {PageMain} from "./page-main";
import {TEST_MOCKS, TEST_MOCK_STORE} from "../../const";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`PageMain`, () => {
  it(`Should PageMain render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <PageMain
              films={TEST_MOCKS.films}
              filteredFilms={TEST_MOCKS.films}
              filmPromo={TEST_MOCKS.film}
              activeGenre={TEST_MOCKS.activeGenre}
              onFilterChange={TEST_MOCKS.noop}
              genresList={TEST_MOCKS.genres}
              rendered={8}
              onIncrementFilms={TEST_MOCKS.noop}
            />,
          </MemoryRouter>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
