import React, {useState} from "react";
import PropTypes from "prop-types";
import {addComment} from "../../store/api-actions";
import {connect} from "react-redux";
import ErrorPopup from "../error-popup/error-popup";
import {extend} from "../../utils/utils";

const RATING_QUANTITY = 5;

const FormReview = (props) => {

  const {onReviewSubmit, id} = props;

  const initialState = {
    errorMessage: null,
    rating: null,
    comment: `1`,
    isBlocked: false,
  };

  const [currentState, setState] = useState(initialState);

  const handleRatingChange = (evt) => {
    setState(extend(currentState, {rating: Number(evt.target.value)}));
  };

  const handleCommentChange = (evt) => {
    setState(extend(currentState, {comment: evt.target.value}));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setState(extend(currentState, {isBlocked: true}));
    onReviewSubmit(
        Number(id),
        {
          rating: currentState.rating,
          comment: currentState.comment
        },
        handleError
    );
  };

  const handleError = (message) => {
    setState(extend(currentState, {errorMessage: message}));
  };

  const handleErrorClose = () => {
    setState(extend(currentState, {errorMessage: null}));
  };

  return (
    <div className="add-review">
      {currentState.errorMessage
        ? <ErrorPopup
          errorMessage = {currentState.errorMessage}
          onCloseButtonClick = {handleErrorClose}/>
        : ``}
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <fieldset style={{border: `none`}} disabled={currentState.isBlocked}>
          <div className="rating">
            <div className="rating__stars">
              {Array(RATING_QUANTITY)
                .fill(``)
                .map((item, index) => {
                  const mark = index + 1;
                  return (
                    <React.Fragment key={index}>
                      <input
                        className="rating__input"
                        id={`star-${mark}`}
                        type="radio"
                        name="rating"
                        value={mark}
                        checked={currentState.rating === mark}
                        onChange={handleRatingChange}
                      />
                      <label className="rating__label" htmlFor={`star-${mark}`}>{`star-${mark}`}</label>
                    </React.Fragment>
                  );
                })
              }
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleCommentChange} value={currentState.comment}></textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={!(currentState.comment.length >= 50 && currentState.comment.length <= 400 && currentState.rating !== null)}
              >Post</button>
            </div>
          </div>
          {currentState.rating === null
            ? <>
            <p>Необходимо выставить оценку </p>
            </>
            : ``}

          {!(currentState.comment.length >= 50 && currentState.comment.length <= 400)
            ? <>
            <span>Отзыв должен содержать не менее 50 и не более 400 симоволов. </span>
            </>
            : ``}

          <span>Символов в отзыве: {currentState.comment.length}</span>
        </fieldset>
      </form>
    </div>
  );
};

FormReview.propTypes = {
  onReviewSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onReviewSubmit(id, userData, handleError) {
    dispatch(addComment(id, userData, handleError));
  },
});

export {FormReview};
export default connect(null, mapDispatchToProps)(FormReview);
