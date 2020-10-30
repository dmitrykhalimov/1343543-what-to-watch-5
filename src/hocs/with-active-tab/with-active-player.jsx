import React, {PureComponent, createRef} from 'react';

const SubstringElapsed = {
  START: 8,
  END: 11,
};
const MS_IN_S = 1000;

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();
      this._progressRef = createRef();
      this._pinProgressRef = createRef();
      this._elapsedTimeRef = createRef();

      this.state = {
        isPlaying: false,
      };

      this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
      this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
    }

    componentDidMount() {
      this.video = this._videoRef.current;
      this.progress = this._progressRef.current;
      this.pinProgress = this._pinProgressRef.current;
      this.elapsedTime = this._elapsedTimeRef.current;

      this.video.oncanplay = () => {
        this.handlePlayPauseClick();
        this.video.play();
      };

      this.video.onended = () => {
        this.handlePlayPauseClick();
      };

      this.video.ontimeupdate = () => {
        this.changeProgressBar();
        this.changeElapsedTime();
      };
    }

    componentWillUnmount() {
      this.handlePlayPauseClick = null;
      this.handleFullScreenClick = null;
    }

    changeAction() {
      switch (this.state.isPlaying) {
        case true:
          this.video.play();
          break;
        case false:
          this.video.pause();
          break;
      }
    }

    changeElapsedTime() {
      const elapsed = this.video.duration - this.video.currentTime;
      this.elapsedTime.textContent = new Date(elapsed * MS_IN_S).toISOString().substr(SubstringElapsed.END, SubstringElapsed.START);
    }

    changeProgressBar() {
      const percentage = (this.video.currentTime / this.video.duration) * 100;

      this.progress.value = percentage;
      this.pinProgress.style.left = `${percentage}% `;
    }

    handlePlayPauseClick() {
      this.setState({isPlaying: !this.state.isPlaying}, this.changeAction);
    }

    handleFullScreenClick() {
      this.video.requestFullscreen();
    }

    render() {
      return <Component
        {...this.props}
        videoRef = {this._videoRef}
        progressRef = {this._progressRef}
        pinProgressRef = {this._pinProgressRef}
        elapsedTimeRef = {this._elapsedTimeRef}
        isPlaying = {this.state.isPlaying}
        onPlayPauseClick = {this.handlePlayPauseClick}
        onFullscreenClick = {this.handleFullScreenClick}
        onEscClick = {this.handleEscClick}
      />;
    }
  }

  return WithActivePlayer;
};

export default withActivePlayer;
