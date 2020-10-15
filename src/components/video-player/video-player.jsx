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
    const {preview} = this.props;

    return (
      <div
        className="small-movie-card__image"
        onMouseEnter={() => this.setState({isActive: true})}
        onMouseLeave={() => this.setState({isActive: false})}
      >
        <video
          ref={this._videoRef}
          src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
          autoPlay={false}
          poster={`img/${preview}`}
          preload="false"
          width="280"
          height="175"
        >

        </video>

      </div>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    function sayHi() {
      alert('Привет');
    }

    if (this.state.isActive) {
      setTimeout(sayHi(), 50000);
    } else {
      video.load();
    }
  }
}

export default VideoPlayer;
