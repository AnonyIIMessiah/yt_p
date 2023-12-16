import React from "react";

const VideoPlayerComponent = ({ videoUrl }) => {
  return (
    <div>
      <h2>Custom Video Player</h2>
      <div dangerouslySetInnerHTML={{ __html: videoUrl }} />
    </div>
  );
};

export default VideoPlayerComponent;
