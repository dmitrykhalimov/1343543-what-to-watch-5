import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Filter from "./filter";
import {TEST_MOCKS} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user selects genre`, () => {
  const handleAddGenreSelect = jest.fn();

  const wrapper = shallow(
      <Filter
        genres={TEST_MOCKS.genres}
        activeGenre={TEST_MOCKS.activeGenre}
        onFilterSelect={handleAddGenreSelect}
        onClick={handleAddGenreSelect}
      />
  );

  const genreSelectButton = wrapper.find(`li`).at(2);
  genreSelectButton.simulate(`click`, {preventDefault() {}});
  expect(handleAddGenreSelect).toHaveBeenCalledTimes(1);
});
