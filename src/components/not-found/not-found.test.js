import React from "react";
import renderer from "react-test-renderer";
import NotFound from "./error-page";

describe(`NotFound`, () => {
  it(`Should NotFound render correctly`, () => {
    const tree = renderer
      .create(
          <NotFound/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

