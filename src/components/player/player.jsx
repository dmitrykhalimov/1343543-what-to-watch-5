import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import VideoPlayerBig from "../video-player-big/video-player-big";

class Player extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player">
        <VideoPlayerBig></VideoPlayerBig>
      </div>
    );
  }
}

Player.propTypes = {};

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps)(Player);
