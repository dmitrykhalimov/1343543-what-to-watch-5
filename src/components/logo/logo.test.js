import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo";
import {MemoryRouter} from 'react-router-dom';

describe(`Logo`, () => {
  it(`Should Logo render correctly, isLight`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Logo
              isLight={true}
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
              isLight={false}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
