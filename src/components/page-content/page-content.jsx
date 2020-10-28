import React from "react";
import PropTypes from "prop-types";

const PageContent = (props) => {

  return (
    <div className="page-content">
      {props.children}
    </div>
  );
};

PageContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired
};

export default PageContent;
