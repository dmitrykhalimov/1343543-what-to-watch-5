import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review";
import {TEST_MOCKS, TEST_MOCK_STORE} from "../../const";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`AddReview`, () => {
  it(`Should AddReview render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <AddReview
              activeFilm={TEST_MOCKS.film}
              match={TEST_MOCKS.match}
              onPageLoad={TEST_MOCKS.noop}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
