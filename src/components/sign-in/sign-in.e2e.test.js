import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user click SignIn`, () => {
  const handleSignIn = jest.fn();

  const wrapper = shallow(
      <SignIn
        onFormSubmit={handleSignIn}
      />
  );

  // неясно как передать туда стейт

  const signInBtn = wrapper.find(`.sign-in__form`);
  signInBtn.simulate(`submit`, {preventDefault() {}});
  expect(handleSignIn).toHaveBeenCalledTimes(1);
});
