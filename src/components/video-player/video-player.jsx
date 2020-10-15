import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isActive: false
    };

  }

  render() {
    const {preview, src} = this.props;

    return (
      <div
        className="small-movie-card__image"
        onMouseEnter={() => this.setState({isActive: true})}
        onMouseLeave={() => this.setState({isActive: false})}
      >
        <video
          ref={this._videoRef}
          autoPlay={false}
          poster={`img/${preview}`}
          src={src}
          width="280"
          height="175"
          muted
        >

        </video>

      </div>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.state.isActive) {
      this.filmTimeout = setTimeout(() => {
        video.play();
      }, 1000);
    } else {
      clearTimeout(this.filmTimeout);
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default VideoPlayer;
