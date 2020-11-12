import React from "react";
import renderer from "react-test-renderer";
import FilmHeader from "./film-header";
import {TEST_MOCK_STORE} from "../../const";
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`FilmHeader`, () => {
  it(`Should FilmHeader render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <FilmHeader
                title={``}
                background={``}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

