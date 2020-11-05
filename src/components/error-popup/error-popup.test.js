import React from "react";
import renderer from "react-test-renderer";
import ErrorPopup from "./error-popup";
import {TEST_MOCKS} from "../../const";

describe(`ErrorPopup`, () => {
  it(`Should ErrorPopup render correctly`, () => {
    const tree = renderer
      .create(
          <ErrorPopup
            errorMessage={TEST_MOCKS.errorMessage}
            onCloseButtonClick={TEST_MOCKS.function}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

