import React from "react";
import renderer from "react-test-renderer";
import ButtonPlay from "./button-play";
import {MemoryRouter} from 'react-router-dom';

describe(`<ButtonPlay /> render`, () => {
  it(`Should ButtonPlay render correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ButtonPlay
              id={1}
            />
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

