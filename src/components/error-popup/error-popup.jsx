import React from "react";
// import PropTypes from "prop-types";
const ErrorPopup = () => {
  const divContainerStyle = {
    position: `absolute`,
    background: `rgba(255,255,255, 0.5)`,
    top: 0,
    left: 0,
    width: `100vw`,
    height: `100vh`,
    outline: `5px solid green`
  };

  const divMessageStyle = {
    width: `1000px`,
    height: `300px`,
    margin: `0 auto`,
    textAlign: `center`,
    marginTop: `15vw`,
    paddingTop: `50px`,
    background: `#150202`,
  };

  const pStyle = {
    color: `#DFCF77`,
    fontSize: `35px`,
    lineHeight: `50px`,
  };

  const buttonStyle = {
    background: `#DFCF77`,
    border: `none`,
    marginTop: `20px`,
    width: `120px`,
    height: `50px`,
  };

  return (
    <div style = {divContainerStyle}>
      <div style = {divMessageStyle}>
        <p style = {pStyle}>Произошла ошибка отправки комментария</p>
        <button style = {buttonStyle}>Закрыть</button>
      </div>
    </div>
  );
};


export default ErrorPopup;