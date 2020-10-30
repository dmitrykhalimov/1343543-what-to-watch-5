import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import VideoPlayerBig from "../video-player-big/video-player-big";
import withActivePlayer from "../../hocs/with-active-tab/with-active-player";
import {validFilm} from "../../utils/props";
import {useParams} from "react-router-dom";

const Player = (props) => {
  const {id} = useParams();
  const VideoPlayerBigWrapped = withActivePlayer(VideoPlayerBig);
  const {films} = props;
  const film = films[id];
  return (
    <div className="player">
      <VideoPlayerBigWrapped
        film = {film}
        id = {id}
      ></VideoPlayerBigWrapped>
    </div>
  );
};

Player.propTypes = {
  films: PropTypes.arrayOf(validFilm).isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps)(Player);
