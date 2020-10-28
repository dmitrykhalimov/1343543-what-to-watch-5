import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._progressRef = createRef();
    this._pinProgressRef = createRef();

    this.state = {
      isPlaying: true,
    };

    this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
    this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
    this.progressLoop = this.progressLoop.bind(this);
  }

  actionPlayer() {
    const video = this._videoRef.current;
    switch (this.state.isPlaying) {
      case true:
        video.play();
        break;
      case false:
        video.pause();
        break;
    }
  }

  handlePlayPauseClick() {
    this.setState({isPlaying: !this.state.isPlaying}, this.actionPlayer);
  }

  handleFullScreenClick() {
    const video = this._videoRef.current;
    video.requestFullscreen();
  }

  progressLoop() {
    const video = this._videoRef.current;
    const progress = this._progressRef.current;
    const pinProgress = this._pinProgressRef.current;

    if (this.state.isPlaying === true) {
      progress.value = Math.round((video.currentTime / video.duration) * 100);
      pinProgress.style.left = `${(video.currentTime / video.duration) * 100}% `;
      requestAnimationFrame(this.progressLoop);
    }
  }

  componentDidMount() {
    const video = this._videoRef.current;
    const progress = this._progressRef.current;

    video.oncanplay = () => {
      this.actionPlayer();
      this.progressLoop();
    };
  }

  render() {
    const {video} = this.props;
    const {isPlaying} = this.state;

    return (
      <div className="player">
        <video
          src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
          className="player__video"
          poster="/img/player-poster.jpg"
          muted="true"
          ref={this._videoRef}>
        </video>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100" ref={this._progressRef}></progress>
              <div className="player__toggler" style={{left: `30%`}} ref={this._pinProgressRef}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={this.handlePlayPauseClick}
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
              onClick={this.handleFullScreenClick}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  video: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps)(Player);
