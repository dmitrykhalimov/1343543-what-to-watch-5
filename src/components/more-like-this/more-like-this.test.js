import React from "react";
import renderer from "react-test-renderer";
import MoreLikeThis from "./more-like-this";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

describe(`MoreLikeThis`, () => {
  it(`Should MoreLikeThis render correctly`, () => {
    const tree = renderer
      .create(
          <MoreLikeThis>
            <MockComponent/>
          </MoreLikeThis>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
