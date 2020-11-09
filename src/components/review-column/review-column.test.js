import React from "react";
import renderer from "react-test-renderer";
import ReviewColumn from "./review-column";

const MockComponent = () => {

  return (
    <div>
    </div>
  );
};

describe(`ReviewColumn`, () => {
  it(`Should ReviewColumn render correctly`, () => {
    const tree = renderer
      .create(
          <ReviewColumn>
            <MockComponent/>
          </ReviewColumn>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
