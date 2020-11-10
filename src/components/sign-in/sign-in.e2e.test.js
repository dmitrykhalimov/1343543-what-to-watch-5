import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SignInE2E`, () => {
  it(`When user click SignIn with password is OK`, () => {
    const handleSignIn = jest.fn();

    const initialStateSignIn = {
      errorMessage: null,
      email: ``,
      password: `1`,
    };

    const wrapper = shallow(
        <SignIn
          onFormSubmit={handleSignIn}
          initialStateSignIn={initialStateSignIn}
        />
    );

    const signInBtn = wrapper.find(`.sign-in__form`);
    signInBtn.simulate(`submit`, {preventDefault() {}});
    expect(handleSignIn).toHaveBeenCalledTimes(1);
  });

  it(`When user click SignIn with password is empty`, () => {
    const handleSignIn = jest.fn();

    const initialStateSignIn = {
      errorMessage: null,
      email: ``,
      password: ``,
    };

    const wrapper = shallow(
        <SignIn
          onFormSubmit={handleSignIn}
          initialStateSignIn={initialStateSignIn}
        />
    );

    const signInBtn = wrapper.find(`.sign-in__form`);
    signInBtn.simulate(`submit`, {preventDefault() {}});
    expect(handleSignIn).toHaveBeenCalledTimes(0);
  });
});
