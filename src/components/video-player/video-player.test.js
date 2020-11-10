import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

describe(`VideoPlayer`, () => {
  it(`Should VideoPlayer render correctly, isPlaying`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            src={``}
            preview={``}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
