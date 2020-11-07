import React from "react";
import renderer from "react-test-renderer";
import ButtonAddReview from "./button-add-review";
import {MemoryRouter} from 'react-router-dom';
import {TEST_MOCKS} from "../../const";

// без MemoryRouter падает с ошибкой "You should not use <Link> outside a <Router>"

describe(`<ButtonPlay /> render`, () => {
  it(`Should ButtonPlay render correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ButtonAddReview
              errorMessage={TEST_MOCKS.errorMessage}
              onCloseButtonClick={TEST_MOCKS.function}
            />
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

