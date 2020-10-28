import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import VideoPlayerBig from "../video-player-big/video-player-big";
import withActivePlayer from "../../hocs/with-active-tab/with-active-player";
import {useParams} from "react-router-dom";

const Player = (props) => {
  let {id} = useParams();
  const VideoPlayerBigWrapped = withActivePlayer(VideoPlayerBig);
  const {films} = props;
  const film = films[id];
  return (
    <div className="player">
      <VideoPlayerBigWrapped
        film = {film}
      ></VideoPlayerBigWrapped>
    </div>
  );
};

Player.propTypes = {};

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps)(Player);
