import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {TEST_MOCKS} from "../../const";

describe(`Tabs`, () => {
  it(`Should Tabs render correctly`, () => {
    const tree = renderer
      .create(
          <Tabs
            film={TEST_MOCKS.film}
            comments={TEST_MOCKS.comments}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
