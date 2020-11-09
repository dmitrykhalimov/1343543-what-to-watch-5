import React from "react";
import renderer from "react-test-renderer";
import {ButtonAddToList} from "./button-add-to-list";
import {MemoryRouter} from 'react-router-dom';
import {TEST_MOCKS} from "../../const";

// без MemoryRouter падает с ошибкой "You should not use <Link> outside a <Router>"

describe(`<ButtonAddToList /> render`, () => {
  it(`Should ButtonAddToList render correctly, isFavorite, isPromo`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ButtonAddToList
              id={TEST_MOCKS.id}
              isFavorite={TEST_MOCKS.boolTrue}
              isPromo={TEST_MOCKS.boolTrue}
              onFavoriteClick={TEST_MOCKS.noop}
            />
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should ButtonAddToList render correctly, !isFavorite, isPromo`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ButtonAddToList
              id={TEST_MOCKS.id}
              isFavorite={TEST_MOCKS.boolFalse}
              isPromo={TEST_MOCKS.boolTrue}
              onFavoriteClick={TEST_MOCKS.noop}
            />
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should ButtonAddToList render correctly, isFavorite, !isPromo`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ButtonAddToList
              id={TEST_MOCKS.id}
              isFavorite={TEST_MOCKS.boolTrue}
              isPromo={TEST_MOCKS.boolFalse}
              onFavoriteClick={TEST_MOCKS.noop}
            />
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should ButtonAddToList render correctly, !isFavorite, !isPromo`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ButtonAddToList
              id={TEST_MOCKS.id}
              isFavorite={TEST_MOCKS.boolFalse}
              isPromo={TEST_MOCKS.boolFalse}
              onFavoriteClick={TEST_MOCKS.noop}
            />
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

