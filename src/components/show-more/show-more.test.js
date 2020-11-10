import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "./show-more";
import {TEST_MOCKS} from "../../const";

describe(`ShowMore`, () => {
  it(`Should ShowMore render correctly isShown`, () => {
    const tree = renderer
      .create(
          <ShowMore
            rendered={1}
            filmsQuantity={1}
            onShowMore={TEST_MOCKS.noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
