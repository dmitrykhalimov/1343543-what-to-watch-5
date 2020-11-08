import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Logo from "../logo/logo";
import Footer from "../footer/footer";
import {login} from "../../store/api-actions";
import PropTypes from "prop-types";
import ErrorPopup from "../error-popup/error-popup";
import {ErrorMessage} from "../../const";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    // ох, опять вылезли стейты. В 9 заменю на хук, чтобы не переписывать лишний раз сейчас на хок и обратно
    this.state = {
      errorMessage: null,
      email: `1@mail.ru`,
      password: ``
    };

    this.onFormSubmit = this.props.onFormSubmit;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handleEmailInput(evt) {
    this.setState({email: evt.target.value});
  }

  handlePasswordInput(evt) {
    this.setState({password: evt.target.value});
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (this.passwordRef.current.value.length === 0) {
      this.handleError(ErrorMessage.WRONG_PASSWORD);
      return;
    }

    this.onFormSubmit({
      email: this.state.email,
      password: this.state.password,
    });
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
      <div className="user-page">
        {this.state.errorMessage ? <ErrorPopup errorMessage = {this.state.errorMessage} onCloseButtonClick = {this.handleErrorClose}/> : ``}
        <header className="page-header user-page__head">
          <Logo/>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={this.handleSubmit}
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" onChange={this.handleEmailInput} value={this.state.email}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" onChange={this.handlePasswordInput} value={this.state.password}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer
          isLight = {true}
        />
      </div>
    );
  }
}

SignIn.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(userData) {

    dispatch(login(userData, this.handleError));
  },
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
