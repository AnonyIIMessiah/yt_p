// server.js

const express = require("express");
const axios = require("axios");

const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
const YOUTUBE_API_KEY = "AIzaSyAClHOV99oW3mPkcHC54gBF1JwK7mmA74c";
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/videos";

app.get("/video/:videoId", async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const response = await axios.get(
      `${YOUTUBE_API_URL}?part=player&id=${videoId}&key=${YOUTUBE_API_KEY}`
    );
    const videoUrl = response.data.items[0].player.embedHtml;
    res.json({ videoUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
