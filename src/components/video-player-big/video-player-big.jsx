import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {validFilm} from "../../utils/props";

const VideoPlayerBig = (props) => {
  const {
    film,
    isPlaying,
    videoRef,
    progressRef,
    pinProgressRef,
    onPlayPauseClick,
    onFullscreenClick} = props;
  console.log(film);
  return (
    <React.Fragment>
      <video
        src={film.video}
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
          <div className="player__name">{film.title}</div>

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
};

VideoPlayerBig.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  film: validFilm,
  // служебные объекты же не нужно расписывать полностью?
  videoRef: PropTypes.object.isRequired,
  progressRef: PropTypes.object.isRequired,
  pinProgressRef: PropTypes.object.isRequired,
  onPlayPauseClick: PropTypes.func.isRequired,
  onFullscreenClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps)(VideoPlayerBig);
