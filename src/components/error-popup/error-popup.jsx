import React from "react";
import PropTypes from "prop-types";

const ErrorPopup = (props) => {
  const divContainerStyle = {
    position: `absolute`,
    background: `rgba(255,255,255, 0.7)`,
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
    cursor: `pointer`,
  };

  const {errorMessage, onCloseButtonClick} = props;


  const handleCloseButton = () => {
    onCloseButtonClick();
  };

  return (
    <div style = {divContainerStyle}>
      <div style = {divMessageStyle}>
        <p style = {pStyle}>{errorMessage}</p>
        <button style = {buttonStyle} onClick={handleCloseButton}>Закрыть</button>
      </div>
    </div>
  );
};

ErrorPopup.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
};

export default ErrorPopup;
