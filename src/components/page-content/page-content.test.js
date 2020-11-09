import React from "react";
import renderer from "react-test-renderer";
import PageContent from "./page-content";

const MockComponent = () => {

  return (
    <div>
    </div>
  );
};

describe(`PageContent`, () => {
  it(`Should PageContent render correctly`, () => {
    const tree = renderer
      .create(
          <PageContent>
            <MockComponent/>
          </PageContent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
