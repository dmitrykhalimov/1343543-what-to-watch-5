import React from "react";
import renderer from "react-test-renderer";
import {MyList} from "./my-list";
import {TEST_MOCKS, TEST_MOCK_STORE} from "../../const";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

// TeamPage.test.js

describe(`MyList`, () => {
  it(`Should MyList render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <MyList
              films={TEST_MOCKS.films}
              handlePageLoad={TEST_MOCKS.noop}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
