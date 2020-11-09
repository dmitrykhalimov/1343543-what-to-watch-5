import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "./show-more";
import {TEST_MOCKS} from "../../const";

describe(`ShowMore`, () => {
  it(`Should ShowMore render correctly`, () => {
    const tree = renderer
      .create(
          <ShowMore
            rendered={TEST_MOCKS.rendered}
            filmsQuantity={TEST_MOCKS.filmsQuantity}
            onShowMore={TEST_MOCKS.noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
