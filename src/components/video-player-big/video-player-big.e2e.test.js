import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayerBig from "./video-player-big";
import {TEST_MOCKS} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user intercat VideoPlayerBig`, () => {
  const handlePlayPause = jest.fn();
  const handleFullScreen = jest.fn();

  const wrapper = shallow(
      <VideoPlayerBig
        id={String(TEST_MOCKS.id)}
        isPlaying={TEST_MOCKS.boolTrue}
        film={TEST_MOCKS.film}
        onPlayPauseClick={handlePlayPause}
        onFullscreenClick={handleFullScreen}
      />
  );

  const playPauseButton = wrapper.find(`.player__play`);
  const fullScreenButton = wrapper.find(`.player__full-screen`);

  playPauseButton.simulate(`click`);
  fullScreenButton.simulate(`click`);

  expect(handlePlayPause).toHaveBeenCalledTimes(1);
  expect(handleFullScreen).toHaveBeenCalledTimes(1);
});
