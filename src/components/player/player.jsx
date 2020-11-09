import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import VideoPlayerBig from "../video-player-big/video-player-big";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import {validFilm} from "../../utils/props";
import {findByKey} from "../../utils/utils";
import {getFilms} from "../../store/reducers/selectors";
import {withRouter} from "react-router";

const Player = (props) => {
  const id = props.match.params.id;
  const {films} = props;

  const film = findByKey(films, id);
  return (
    <div className="player">
      <VideoPlayerBig
        film = {film}
        id = {id}
      ></VideoPlayerBig>
    </div>
  );
};

Player.propTypes = {
  films: PropTypes.arrayOf(validFilm).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
});

export {Player};
export default withRouter(connect(mapStateToProps)(Player));
