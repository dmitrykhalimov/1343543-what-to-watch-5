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
  it(`Should AddReview render correctly, isFavorite`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <AddReview
              activeFilm={{}}
              match={{
                params: {
                  id: `29`
                }
              }}
              handlePageLoad={TEST_MOCKS.noop}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
