import React from "react";
import Logo from "../logo/logo";
import PropTypes from "prop-types";

const Footer = (props) => {
  const {isLight} = props;

  return (
    <footer className="page-footer">
      <Logo isLight = {isLight} />
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isLight: PropTypes.bool.isRequired,
};

export default React.memo(Footer);
