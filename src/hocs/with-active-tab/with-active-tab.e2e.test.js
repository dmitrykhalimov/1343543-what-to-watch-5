import React from "react";
import withActiveTab from "./with-active-tab";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {TEST_MOCKS} from "../../const";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;

const MockComponentWrapped = withActiveTab(MockComponent);

it(`withActiveTabe2e`, () => {
  const wrapper = shallow(<MockComponentWrapped
    film={TEST_MOCKS.film}
    comments={TEST_MOCKS.comments}
  />);

  expect(wrapper.state().activeTab).toEqual(`OVERVIEW`);
});
