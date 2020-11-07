import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {addComment} from "../../store/api-actions";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import ErrorPopup from "../error-popup/error-popup";

const RATING_QUANTITY = 5;

class FormReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: 3,
      comment: ``,
      errorMessage: null,
    };

    this.onReviewSubmit = this.props.onReviewSubmit;

    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);
  }

  handleRatingChange(evt) {
    this.setState({
      rating: Number(evt.target.value),
    });
  }

  handleCommentChange(evt) {
    this.setState({
      comment: evt.target.value,
    });
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    this.onReviewSubmit(
        Number(this.props.match.params.id),
        {
          rating: this.state.rating,
          comment: this.state.comment
        }
    );
  }

  handleError(message) {
    this.setState({
      errorMessage: message,
    });
  }

  handleErrorClose() {
    this.setState({
      errorMessage: null,
    });
  }

  render() {
    return (
      <div className="add-review">
        {this.state.errorMessage ? <ErrorPopup errorMessage = {this.state.errorMessage} onCloseButtonClick = {this.handleErrorClose}/> : ``}
        <form action="#" className="add-review__form" onSubmit={this.handleFormSubmit}>
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
                        checked={this.state.rating === mark}
                        onChange={this.handleRatingChange}
                      />
                      <label className="rating__label" htmlFor={`star-${mark}`}>{`star-${mark}`}</label>
                    </React.Fragment>
                  );
                })
              }
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={this.handleCommentChange} value={this.state.comment}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

FormReview.propTypes = {
  onReviewSubmit: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onReviewSubmit(id, userData) {
    dispatch(addComment(id, userData, this.handleError));
  },
});

export {FormReview};
export default withRouter(connect(null, mapDispatchToProps)(FormReview));
