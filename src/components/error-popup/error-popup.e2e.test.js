import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ErrorPopup from "./error-popup";
import {TEST_MOCKS} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user closes ErrorPopup`, () => {
  const handleClosePopup = jest.fn();

  const wrapper = shallow(
      <ErrorPopup
        errorMessage={TEST_MOCKS.errorMessage}
        onCloseButtonClick={handleClosePopup}
      />
  );

  const addToListButton = wrapper.find(`button`);
  addToListButton.simulate(`click`);
  expect(handleClosePopup).toHaveBeenCalledTimes(1);
});
