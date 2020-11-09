import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ButtonAddToList} from "./button-add-to-list";
import {TEST_MOCKS} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user adds to list`, () => {
  const handleAddToListClick = jest.fn();

  const wrapper = shallow(
      <ButtonAddToList
        id={TEST_MOCKS.id}
        isFavorite={TEST_MOCKS.boolTrue}
        isPromo={TEST_MOCKS.boolTrue}
        onFavoriteClick={handleAddToListClick}
      />
  );

  const addToListButton = wrapper.find(`.btn`);
  addToListButton.simulate(`click`);
  expect(handleAddToListClick).toHaveBeenCalledTimes(1);
});
