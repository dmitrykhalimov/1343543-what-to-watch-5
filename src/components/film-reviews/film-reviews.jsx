import React from "react";
import Review from "../review/review";
import ReviewColumn from "../review-column/review-column";
import {validReview} from "../../utils/props";

const FilmReviews = (props) => {

  const COMMENTS_IN_COLUMN = 3;
  const {review} = props;
  let cnt = 0;

  const makeCommentColumn = (reviews) => {

    const resultArray = reviews
      .slice(cnt, cnt + COMMENTS_IN_COLUMN)
      .map((item) => {
        cnt++;
        return <Review
          key={item.commentId}
          review={item}
        />;

      });
    return (
      <ReviewColumn>
        {resultArray}
      </ReviewColumn>
    );
  };

  return (
    <div className="movie-card__reviews movie-card__row">
      {makeCommentColumn(review.reviews)}
      {makeCommentColumn(review.reviews)}
    </div>
  );
};

FilmReviews.propTypes = {
  review: validReview,
};


export default FilmReviews;


