import React from "react";
import PropTypes from "prop-types";

const UserAvatar = (props) => {
  const {avatarUrl} = props;
  const linkToAvatar = `img/${avatarUrl}`;
  return (
    <div className="user-block__avatar">
      <img src={linkToAvatar} alt="User avatar" width="63" height="63" />
    </div>
  );
};

UserAvatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
};

export default UserAvatar;

