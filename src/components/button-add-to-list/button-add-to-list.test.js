import React from "react";
import renderer from "react-test-renderer";
import {ButtonAddToList} from "./button-add-to-list";
import {MemoryRouter} from 'react-router-dom';
import {TEST_MOCKS} from "../../const";

describe(`<ButtonAddToList /> render`, () => {
  it(`Should ButtonAddToList render correctly, isFavorite, isPromo`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ButtonAddToList
              id={1}
              isFavorite={true}
              isPromo={true}
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
              id={1}
              isFavorite={false}
              isPromo={true}
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
              id={1}
              isFavorite={true}
              isPromo={false}
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
              id={1}
              isFavorite={false}
              isPromo={false}
              onFavoriteClick={TEST_MOCKS.noop}
            />
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

