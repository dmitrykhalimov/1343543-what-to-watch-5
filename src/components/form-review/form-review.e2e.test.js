import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FormReview} from "./form-review";
import {TEST_MOCKS} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Test add user review`, () => {
  const handleFormSubmit = jest.fn();

  const wrapper = shallow(
      <FormReview
        onReviewSubmit={handleFormSubmit}
        match={TEST_MOCKS.match}
        id={String(TEST_MOCKS.id)}
      />
  );

  const reviewForm = wrapper.find(`.add-review__form`);
  reviewForm.simulate(`submit`, {preventDefault() {}});
  expect(handleFormSubmit).toHaveBeenCalledTimes(1);
});
