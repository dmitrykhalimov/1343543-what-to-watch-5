import React from "react";
import renderer from "react-test-renderer";
import ErrorPopup from "./error-popup";
import {TEST_MOCKS} from "../../const";

describe(`ErrorPopup`, () => {
  it(`Should ErrorPopup render correctly`, () => {
    const tree = renderer
      .create(
          <ErrorPopup
            errorMessage={``}
            onCloseButtonClick={TEST_MOCKS.noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

