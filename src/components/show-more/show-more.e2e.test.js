import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ShowMore} from "./show-more";
import {TEST_MOCKS} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user click ShowMore`, () => {
  const handleShowMoreClick = jest.fn();

  const wrapper = shallow(
      <ShowMore
        rendered={1}
        filmsQuantity={1}
        onShowMore={handleShowMoreClick}
      />
  );

  const showMore = wrapper.find(`.catalog__button`);
  showMore.simulate(`click`);
  expect(handleShowMoreClick).toHaveBeenCalledTimes(1);
});
