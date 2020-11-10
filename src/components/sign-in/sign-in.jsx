import React, {useState} from "react";
import {connect} from "react-redux";
import Logo from "../logo/logo";
import Footer from "../footer/footer";
import {login} from "../../store/api-actions";
import PropTypes from "prop-types";
import ErrorPopup from "../error-popup/error-popup";
import {ErrorMessage} from "../../const";
import {extend} from "../../utils/utils";

const SignIn = (props) => {

  const {onFormSubmit, initialStateSignIn} = props;
  const initialState = Object.assign({}, initialStateSignIn);
  const [currentState, setState] = useState(initialState);

  const handleEmailInput = (evt) => {
    setState(extend(currentState, {email: evt.target.value}));
  };

  const handlePasswordInput = (evt) => {
    setState(extend(currentState, {password: evt.target.value}));
  };

  const handleError = (message) => {
    setState(extend(currentState, {errorMessage: message}));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (currentState.password.length === 0) {
      handleError(ErrorMessage.WRONG_PASSWORD);
      return;
    }

    onFormSubmit({
      email: currentState.email,
      password: currentState.password,
    }, handleError);
  };


  const handleErrorClose = () => {
    setState(extend({errorMessage: null}));
  };

  return (
    <div className="user-page">
      {currentState.errorMessage ? <ErrorPopup errorMessage = {currentState.errorMessage} onCloseButtonClick = {handleErrorClose}/> : ``}
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" onChange={handleEmailInput} value={currentState.email}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" onChange={handlePasswordInput} value={currentState.password}/>
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
};

SignIn.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  initialStateSignIn: PropTypes.shape({
    errorMessage: null,
    email: ``,
    password: ``,
  })
};

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(userData, handleError) {
    dispatch(login(userData, handleError));
  },
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
