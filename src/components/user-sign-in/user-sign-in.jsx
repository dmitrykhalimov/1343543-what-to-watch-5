import React from "react";
import {Link} from "react-router-dom";
import {AppPath} from "../../const";

const UserSignIn = () => {
  return (
    <Link to={AppPath.login} className="user-block__link">Sign in</Link>
  );
};

export default UserSignIn;

