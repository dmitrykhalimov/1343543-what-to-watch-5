import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo";
import {TEST_MOCKS} from "../../const";
import {MemoryRouter} from 'react-router-dom';

describe(`Logo`, () => {
  it(`Should Logo render correctly, isLight`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Logo
              isLight={TEST_MOCKS.boolTrue}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should Logo render correctly, !isLight`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Logo
              isLight={TEST_MOCKS.boolFalse}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
