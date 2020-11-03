import React from "react";
import PropTypes from "prop-types";

const UserBlock = (props) => {

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </div>
  );
};

UserBlock.propTypes = {};

export default UserBlock;
