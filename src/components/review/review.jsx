import React from "react";
import {validReview} from "../../utils/props";

const Review = (props) => {
  const {comment, name, date, rank} = props.review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          {/* TODO судя по тому что тут указан dateTime - надо писать адаптер, но т.к. я не знаю входного формата подожду до лекции с сервером :) */}
          <time className="review__date" dateTime="2016-12-24">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rank}</div>
    </div>

  );
};

Review.propTypes = {
  review: validReview,
};

export default Review;
