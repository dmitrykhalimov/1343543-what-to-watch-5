import React from "react";
import renderer from "react-test-renderer";
import withActiveTab from "./with-active-tab";
import {TEST_MOCKS} from "../../const";

const MockComponent = () => {

  return (
    <React.Fragment>
    </React.Fragment>
  );
};

const MockComponentWrapped = withActiveTab(MockComponent);

describe(`withActiveTab`, () => {
  it(`Should withActiveTab render correctly`, () => {
    const tree = renderer
      .create(
          <MockComponentWrapped
            film={TEST_MOCKS.film}
            comments={TEST_MOCKS.comments}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
