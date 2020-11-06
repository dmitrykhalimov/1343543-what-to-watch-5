import React from "react";
import renderer from "react-test-renderer";
import UserSignIn from "./user-sign-in";
import {MemoryRouter} from 'react-router-dom';

describe(`UserSignIn`, () => {
  it(`Should UserSignIn render correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <UserSignIn/>
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
