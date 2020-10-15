import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  handleHoverPlayer() {
    const video = this._videoRef.current;
    this.filmTimeout = setTimeout(() => {
      video.play();
    }, 1000);
  }

  handleUnhoverPlayer() {
    const video = this._videoRef.current;
    if (this.filmTimeout) {
      clearTimeout(this.filmTimeout);
    }
    video.load();
  }

  render() {
    const {preview, src} = this.props;

    return (
      <div
        className="small-movie-card__image"
        onMouseEnter={() => this.handleHoverPlayer()}
        onMouseLeave={() => this.handleUnhoverPlayer()}
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
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default VideoPlayer;
