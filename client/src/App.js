import React, { useState } from "react";
import axios from "axios";
import VideoPlayerComponent from "./VideoPlayerComponent.js";

function App() {
  const [videoId, setVideoId] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://yt-backend11.onrender.com/video/${videoId}`
      );
      setVideoUrl(response.data.videoUrl);

      // console.log(response.data.videoUrl);
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  return (
    <div className="App">
      <h1>YouTube Video Playback</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter YouTube Video ID (unlisted):
          <input
            type="text"
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Play Video</button>
      </form>
      <hr />
      {videoUrl && <VideoPlayerComponent videoUrl={videoUrl} />}
    </div>
  );
}

export default App;
