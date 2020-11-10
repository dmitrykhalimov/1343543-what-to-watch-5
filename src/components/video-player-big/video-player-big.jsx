import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
import {validFilm} from "../../utils/props";
import {Link} from "react-router-dom";

const SubstringElapsed = {
  START: 8,
  END: 11,
};

const MS_IN_S = 1000;

const VideoPlayerBig = (props) => {
  const {film} = props;

  const [isPlaying, setState] = useState(false);

  const videoRef = useRef();
  const progressRef = useRef();
  const pinProgressRef = useRef();
  const elapsedTimeRef = useRef();

  const handlePlayPauseClick = () => {
    setState(!isPlaying);
    changeAction();
  };

  const handleFullScreenClick = () => {
    videoRef.current.requestFullscreen();
  };

  const changeAction = () => {
    switch (!isPlaying) {
      case true:
        videoRef.current.play();
        break;
      case false:
        videoRef.current.pause();
        break;
    }
  };

  useEffect(() => {
    videoRef.current.ontimeupdate = () => {
      changeElapsedTime();
      changeProgressBar();
    };

    videoRef.current.oncanplay = () => {
      handlePlayPauseClick();
      videoRef.current.play();
    };

    videoRef.current.onpause = () => {
      setState(false);
    };
  }, []);

  const changeElapsedTime = () => {
    const elapsed = videoRef.current.duration - videoRef.current.currentTime;
    elapsedTimeRef.current.textContent = new Date(elapsed * MS_IN_S).toISOString().substr(SubstringElapsed.END, SubstringElapsed.START);
  };

  const changeProgressBar = () => {
    const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;

    progressRef.current.value = percentage;
    pinProgressRef.current.style.left = `${percentage}% `;
  };

  return (
    <React.Fragment>
      <video
        src={film.videoMain}
        className="player__video"
        poster="/img/player-poster.jpg"
        ref={videoRef}>
      </video>

      <Link type="button" className="player__exit" to={`/films/${film.id}`}>Exit</Link>

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
            onClick={handlePlayPauseClick}
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
            onClick={handleFullScreenClick}
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
  film: validFilm,
};

export default VideoPlayerBig;
