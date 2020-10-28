import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {validFilm} from "../../utils/props";
import {Link} from "react-router-dom";

const VideoPlayerBig = (props) => {
  const {
    id,
    film,
    isPlaying,
    videoRef,
    progressRef,
    pinProgressRef,
    elapsedTimeRef,
    onPlayPauseClick,
    onFullscreenClick} = props;

  return (
    <React.Fragment>
      <video
        src={film.video}
        className="player__video"
        poster="/img/player-poster.jpg"
        ref={videoRef}>
      </video>

      <Link type="button" className="player__exit" to={`/films/${id}`}>Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100" ref={progressRef}></progress>
            <div className="player__toggler" style={{left: `0%`}} ref={pinProgressRef}>Toggler</div>
          </div>
          <div className="player__time-value" ref={elapsedTimeRef}>1:30:29</div>
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
  id: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  film: validFilm,
  // служебные объекты же не нужно расписывать полностью?
  videoRef: PropTypes.object.isRequired,
  progressRef: PropTypes.object.isRequired,
  pinProgressRef: PropTypes.object.isRequired,
  elapsedTimeRef: PropTypes.object.isRequired,
  onPlayPauseClick: PropTypes.func.isRequired,
  onFullscreenClick: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps)(VideoPlayerBig);
