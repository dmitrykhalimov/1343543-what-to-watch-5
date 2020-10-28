import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class VideoPlayerBig extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {isPlaying, videoRef, progressRef, pinProgressRef, onPlayPauseClick, onFullscreenClick} = this.props;

    return (
      <React.Fragment>
        <video
          src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
          className="player__video"
          poster="/img/player-poster.jpg"
          muted={true}
          ref={videoRef}>
        </video>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100" ref={progressRef}></progress>
              <div className="player__toggler" style={{left: `30%`}} ref={pinProgressRef}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={onPlayPauseClick}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref={isPlaying ? `#pause` : `#play-s`}></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={onFullscreenClick}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

VideoPlayerBig.propTypes = {};

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps)(VideoPlayerBig);
