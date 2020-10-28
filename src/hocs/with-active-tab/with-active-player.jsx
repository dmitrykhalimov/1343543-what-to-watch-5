import React, {PureComponent, createRef} from 'react';

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
      this.progressLoop = this.progressLoop.bind(this);
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
      // StackOverFlow - чемпион!
      this.elapsedTime.textContent = new Date(elapsed * 1000).toISOString().substr(11, 8);
    }

    computePercentage() {
      return Math.round((this.video.currentTime / this.video.duration) * 100);
    }

    progressLoop() {
      if (this.state.isPlaying === true) {
        const percentage = this.computePercentage();
        this.progress.value = percentage;
        this.pinProgress.style.left = `${percentage}% `;
        this.changeElapsedTime();
        requestAnimationFrame(this.progressLoop);
      }
    }

    handlePlayPauseClick() {
      this.setState({isPlaying: !this.state.isPlaying}, this.changeAction);
    }

    handleFullScreenClick() {
      this.video.requestFullscreen();
    }

    componentDidMount() {
      this.video = this._videoRef.current;
      this.progress = this._progressRef.current;
      this.pinProgress = this._pinProgressRef.current;
      this.elapsedTime = this._elapsedTimeRef.current;

      this.video.oncanplay = () => {
        this.handlePlayPauseClick();
        this.progressLoop();
      };

      this.video.onended = () => {
        this.handlePlayPauseClick();
      };
    }

    componentDidUpdate() {
      this.progressLoop();
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
      />;
    }
  }

  return WithActivePlayer;
};

export default withActivePlayer;
