import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";
import {TEST_MOCKS} from "../../const";
import {MemoryRouter} from 'react-router-dom';

describe(`Footer`, () => {
  it(`Should Footer render correctly, isLight`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Footer
              isLight={TEST_MOCKS.boolTrue}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should Footer render correctly, !isLight`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Footer
              isLight={TEST_MOCKS.boolFalse}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
