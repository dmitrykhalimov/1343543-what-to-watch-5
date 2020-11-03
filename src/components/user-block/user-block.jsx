import React from "react";
import UserAvatar from "../user-avatar/user-avatar";
import {AuthorizationStatus} from "../../const";
import UserSignIn from "../user-sign-in/user-sign-in";
import {validUserData} from "../../utils/props";

const UserBlock = (props) => {
  const {authorizationStatus, avatarUrl} = props.userData;
  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH
        ? <UserAvatar avatarUrl = {avatarUrl}/>
        : <UserSignIn/>
      }
    </div>
  );
};

UserBlock.propTypes = {
  userData: validUserData,
};

export default UserBlock;

