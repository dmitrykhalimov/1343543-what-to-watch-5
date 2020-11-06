import React from "react";
import {validComment} from "../../utils/props";
import {translateDateToLocale, translateDateToDateTime} from "../../utils/common";

const Review = (props) => {
  const {comment} = props;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={translateDateToDateTime(comment.date)}>{translateDateToLocale(comment.date)}</time>
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
