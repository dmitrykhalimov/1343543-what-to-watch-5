import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";
import {MemoryRouter} from 'react-router-dom';

describe(`Footer`, () => {
  it(`Should Footer render correctly, isLight`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Footer/>
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
