import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import {TEST_MOCKS} from "../../const";

describe(`VideoPlayer`, () => {
  it(`Should VideoPlayer render correctly, isPlaying`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            src={TEST_MOCKS.src}
            preview={TEST_MOCKS.preview}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
