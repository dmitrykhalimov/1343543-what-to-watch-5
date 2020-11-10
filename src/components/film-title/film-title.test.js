import React from "react";
import renderer from "react-test-renderer";
import FilmTitle from "./film-title";
import {TEST_MOCK_STORE} from "../../const";
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
                id={1}
                year={1}
                genre={``}
                title={``}
                isPromo={true}
                isFavorite={true}
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
                id={1}
                year={1}
                genre={``}
                title={``}
                isPromo={true}
                isFavorite={false}
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
                id={1}
                year={1}
                genre={``}
                title={``}
                isPromo={false}
                isFavorite={true}
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
                id={1}
                year={1}
                genre={``}
                title={``}
                isPromo={false}
                isFavorite={false}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

