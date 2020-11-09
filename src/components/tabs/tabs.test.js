import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {TEST_MOCKS} from "../../const";

const mockComponent = () => {
  return (
    <div>
    </div>
  );
};

describe(`Tabs`, () => {
  it(`Should Tabs render correctly`, () => {
    const tree = renderer
      .create(
          <Tabs
            activeTab={TEST_MOCKS.tab.OVERVIEW}
            onSwitchTab={TEST_MOCKS.noop}
            poster={TEST_MOCKS.poster}
            tabToRender={mockComponent()}
            tabs={Array.from(Object.values(TEST_MOCKS.tab.OVERVIEW))}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
