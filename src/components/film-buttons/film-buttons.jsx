import React from "react";
import {connect} from "react-redux";

import PropTypes from "prop-types";

import ButtonPlay from "../button-play/button-play";
import ButtonAddToList from "../button-add-to-list/button-add-to-list";
import ButtonAddReview from "../button-add-review/button-add-review";

import {getUserData} from "../../store/reducers/selectors";
import {AuthorizationStatus} from "../../const";
import {validUserData} from "../../utils/props";

const FilmButtons = (props) => {
  const {id, isPromo, userData, isFavorite} = props;
  return (
    <div className="movie-card__buttons">
      <ButtonPlay
        id = {id}
      />
      <ButtonAddToList
        id = {id}
        isFavorite = {isFavorite}
      />
      {!isPromo && userData.authorizationStatus === AuthorizationStatus.AUTH
        ? <ButtonAddReview id = {id}></ButtonAddReview>
        : ``}
    </div>
  );
};

FilmButtons.propTypes = {
  id: PropTypes.number.isRequired,
  isPromo: PropTypes.bool.isRequired,
  userData: validUserData,
  isFavorite: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  userData: getUserData(state),
});


export default connect(mapStateToProps)(FilmButtons);
