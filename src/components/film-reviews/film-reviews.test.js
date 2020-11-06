import React from "react";
import renderer from "react-test-renderer";
import FilmReviews from "./film-reviews";
import {TEST_MOCKS, TEST_MOCK_STORE} from "../../const";
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`FilmReviews`, () => {
  it(`Should FilmReviews render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <FilmReviews
                comments={TEST_MOCKS.comments}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

