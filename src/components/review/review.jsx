import React from "react";
import {validComment} from "../../utils/props";

const Review = (props) => {
  const {comment} = props;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          {/* TODO судя по тому что тут указан dateTime - надо писать адаптер, но т.к. я не знаю входного формата подожду до лекции с сервером :) */}
          <time className="review__date" dateTime="2016-12-24">{comment.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>

  );
};

Review.propTypes = {
  comment: validComment,
};

export default Review;
