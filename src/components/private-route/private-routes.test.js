import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-routes";
import {MemoryRouter} from 'react-router-dom';
import {TEST_MOCKS} from "../../const";

describe(`PrivateRoute`, () => {
  it(`Should PrivateRoute render correctly, authorizationStatus`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <PrivateRoute
              authorizationStatus={TEST_MOCKS.authorizationStatusTrue}
              render={TEST_MOCKS.noop}
              path={``}
              exact={true}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should PrivateRoute render correctly, !authorizationStatus`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <PrivateRoute
              authorizationStatus={TEST_MOCKS.authorizationStatusFalse}
              render={TEST_MOCKS.noop}
              path={``}
              exact={true}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
