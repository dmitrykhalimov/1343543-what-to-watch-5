import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isPlaying: !this.state.isPlaying});
  }

  componentDidMount() {
    const video = this._videoRef.current;
    video.play();
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
          ref={this._videoRef}>
        </video>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={this.handleClick}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref={isPlaying ? `#play-s` : `#pause`}></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
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
