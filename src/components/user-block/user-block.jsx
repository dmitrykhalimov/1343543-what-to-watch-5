import React from "react";
import UserAvatar from "../user-avatar/user-avatar";
import {AuthorizationStatus} from "../../const";
import UserSignIn from "../user-sign-in/user-sign-in";
import {validUserData} from "../../utils/props";
import {connect} from "react-redux";

import {getUserData} from "../../store/reducers/selectors";

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

const mapStateToProps = (state) => ({
  userData: getUserData(state),
});


// export default UserBlock;
export default connect(mapStateToProps)(UserBlock);
