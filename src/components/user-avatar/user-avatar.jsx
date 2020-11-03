import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppPath} from "../../const";

const UserAvatar = (props) => {
  const {avatarUrl} = props;
  return (
    <Link to={AppPath.mylist}>
      <div className="user-block__avatar">
        <img src={avatarUrl} alt="User avatar" width="63" height="63" />
      </div>
    </Link>
  );
};

UserAvatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
};

export default UserAvatar;

