import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";
import {TEST_MOCKS} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user click SignIn`, () => {
  const handleSignIn = jest.fn();

  const wrapper = shallow(
      <SignIn
        rendered={TEST_MOCKS.rendered}
        filmsQuantity={TEST_MOCKS.filmsQuantity}
        onFormSubmit={handleSignIn}
      />
  );

  const showMore = wrapper.find(`.sign-in__form`);
  showMore.simulate(`submit`);
  expect(handleSignIn).toHaveBeenCalledTimes(1);
});
