import React from "react";
import renderer from "react-test-renderer";
import ButtonPlay from "./button-play";
import {MemoryRouter} from 'react-router-dom';
import {TEST_MOCKS} from "../../const";

// без MemoryRouter падает с ошибкой "You should not use <Link> outside a <Router>"

describe(`<ButtonPlay /> render`, () => {
  it(`Should ButtonPlay render correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <ButtonPlay
              id={TEST_MOCKS.id}
            />
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

