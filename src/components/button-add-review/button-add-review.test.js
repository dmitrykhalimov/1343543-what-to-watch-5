import React from "react";
import renderer from "react-test-renderer";
import ButtonAddReview from "./button-add-review";
import {MemoryRouter} from 'react-router-dom';

describe(`<ButtonPlay /> render`, () => {
  it(`Should ButtonPlay render correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ButtonAddReview
              id={null}
            />
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

