import React from "react";
import renderer from "react-test-renderer";
import VideoPlayerBig from "./video-player-big";
import {MemoryRouter} from 'react-router-dom';
import {TEST_MOCKS} from "../../const";

describe(`VideoPlayerBig`, () => {
  it(`Should VideoPlayerBig render correctly, isPlaying`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <VideoPlayerBig
              id={String(TEST_MOCKS.id)}
              isPlaying={TEST_MOCKS.boolTrue}
              film={TEST_MOCKS.film}
              onPlayPauseClick={TEST_MOCKS.noop}
              onFullscreenClick={TEST_MOCKS.noop}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
