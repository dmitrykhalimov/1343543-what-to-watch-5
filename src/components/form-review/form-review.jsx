import React, {PureComponent} from "react";

const RATING_QUANTITY = 5;

class FormReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: RATING_QUANTITY,
      comment: ``,
    };

    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleRatingChange(evt) {

    this.setState({
      rating: evt.target.value,
    });
  }

  handleCommentChange(evt) {
    this.setState({
      comment: evt.target.value,
    });
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={this.handleFormSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {Array(RATING_QUANTITY)
                .fill(``)
                .map((item, index) => {
                  const mark = index + 1;
                  return (
                    // item + index не самый изящный способ избежать обвинений линтера в неиспользовании item, без которого не запустить map :)
                    <React.Fragment key={item + index}>
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
                    // TODO: хотелось добавить тернарный оператор {mark === 3 ? defaultChecked : ``), чтобы 3 звезды стояли по умолчанию но JSX в упор не понимает такую конструкцию. Надо будет пофиксить.
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

export default FormReview;
