import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import VideoPlayerBig from "../video-player-big/video-player-big";
import withActivePlayer from "../../hocs/with-active-tab/with-active-player";
import VideoPlayer from "../video-player/video-player";

const VideoPlayerBigWrapped = withActivePlayer(VideoPlayerBig);
class Player extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player">
        <VideoPlayerBigWrapped></VideoPlayerBigWrapped>
      </div>
    );
  }
}

Player.propTypes = {};

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps)(Player);
