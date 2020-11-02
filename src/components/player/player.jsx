import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import VideoPlayerBig from "../video-player-big/video-player-big";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import {validFilm} from "../../utils/props";
import {useParams} from "react-router-dom";
import {findByKey} from "../../utils/utils";

const Player = (props) => {
  const {id} = useParams();
  const VideoPlayerBigWrapped = withActivePlayer(VideoPlayerBig);
  const {films} = props;
  const film = findByKey(films, id);
  return (
    <div className="player">
      <VideoPlayerBigWrapped
        film = {film}
        id = {id}
      ></VideoPlayerBigWrapped>
    </div>
  );
};

Player.propTypes = {
  films: PropTypes.arrayOf(validFilm).isRequired,
};

const mapStateToProps = ({data}) => ({
  films: data.films,
});

export default connect(mapStateToProps)(Player);
