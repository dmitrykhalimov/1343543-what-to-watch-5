import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";
import { getAuthStatus } from "../../store/reducers/selectors";


const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;
  console.log(props)
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus !== AuthorizationStatus.AUTH
            ? render()
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
