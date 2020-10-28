import React, {PureComponent, createRef} from 'react';
import FilmOverview from '../../components/film-overview/film-overview';
import FilmDetails from '../../components/film-details/film-details';
import FilmReviews from '../../components/film-reviews/film-reviews';
import {validFilm, validReview} from "../../utils/props";


const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
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
      video.oncanplay = () => {
        this.actionPlayer();
        this.progressLoop();
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
        isPlaying = {this.state.isPlaying}
        onPlayPauseClick = {this.handlePlayPauseClick}
        onFullscreenClick = {this.handleFullScreenClick}
        // tabs = {Object.values(Tab)}
        // poster = {film.poster}
        // activeTab = {this.state.activeTab}
        // tabToRender = {this.renderTab()}
        // onSwitchTab = {this.handleSwitchTab}
      />;
    }
  }

  WithActivePlayer.propTypes = {
    film: validFilm,
    review: validReview,
  };
  return WithActivePlayer;
};

export default withActivePlayer;
