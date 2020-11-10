import React from "react";
import renderer from "react-test-renderer";
import UserAvatar from "./user-avatar";
import {MemoryRouter} from 'react-router-dom';

describe(`UserAvatar`, () => {
  it(`Should UserAvatar render correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <UserAvatar
              avatarUrl={``}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
