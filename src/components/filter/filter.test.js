import React from "react";
import renderer from "react-test-renderer";
import Filter from "./filter";
import {TEST_MOCKS} from "../../const";

describe(`Filter`, () => {
  it(`Should Filter render correctly`, () => {
    const tree = renderer
      .create(
          <Filter
            genres={TEST_MOCKS.genres}
            activeGenre={TEST_MOCKS.activeGenre}
            onFilterSelect={TEST_MOCKS.noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

