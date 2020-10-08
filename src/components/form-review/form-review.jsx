import React, {PureComponent} from "react";

const RATING_QUANTITY = 5;

class FormReview extends PureComponent {
  constructor(props) {
    super(props);

    // есть большие сомнения что стейт нужно поместить именно на этом уровне, а не на уровне страницы AddReview, или даже табы Reviews, но т.к. неясна архитектура и дальнейшая логика оставил здесь
    this.state = {
      rating: 5,
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

  // не очень понятно зачем вешать onChange на текстовое поле, но так было в демонстрации к лекции :/
  handleCommentChange(evt) {
    this.setState({
      comment: evt.target.value,
    });
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    // отправить на сервер state
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
                    <React.Fragment key={item + index}>
                      <input
                        className="rating__input"
                        id={`star-${mark}`}
                        type="radio"
                        name="rating"
                        value={mark}
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
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={this.handleCommentChange}></textarea>
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
