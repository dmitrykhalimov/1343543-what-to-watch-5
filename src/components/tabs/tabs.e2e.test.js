import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs";
import {TEST_MOCKS} from "../../const";

const mockComponent = () => {
  return (
    <div>
    </div>
  );
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user click Tabs`, () => {
  const handleTabClick = jest.fn();

  const wrapper = shallow(
      <Tabs
        activeTab={TEST_MOCKS.tab.OVERVIEW}
        onSwitchTab={handleTabClick}
        poster={TEST_MOCKS.poster}
        tabToRender={mockComponent()}
        tabs={Array.from(Object.values(TEST_MOCKS.tab.OVERVIEW))}
      />
  );

  const genreSelectButton = wrapper.find(`li`).at(2);
  genreSelectButton.simulate(`click`, {preventDefault() {}});
  expect(handleTabClick).toHaveBeenCalledTimes(1);
});
