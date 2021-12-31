const fs = require("fs");
const path = require("path");
const { v4: uuidV4 } = require("uuid");

const songs = JSON.parse(
  fs.readFileSync(path.join(__dirname, "/data/songs.json"), "utf-8")
);

const handleModifyingData = (data) => {
  //this function add id and youtubeId to the body
  const youTubeIdFromLink = (url) =>
    url.match(
      /(?:https?:\/\/)?(?:www\.|m\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\/?\?v=|\/embed\/|\/)([^\s&\?\/\#]+)/
    )[1];

  const youtubeId = youTubeIdFromLink(data.url);

  const modData = { ...data };
  modData.thumbnail = handleGetThumbnail(modData.url, "big");
  modData.youtubeId = youtubeId;
  modData.id = uuidV4();
  modData.url = undefined;

  return modData;
};

const handleGetThumbnail = (url, size) => {
  if (url === null) {
    return "";
  }
  size = size === null ? "big" : size;
  results = url.match("[\\?&]v=([^&#]*)");
  video = results === null ? url : results[1];

  if (size === "small") {
    return "http://img.youtube.com/vi/" + video + "/2.jpg";
  }
  return "http://img.youtube.com/vi/" + video + "/0.jpg";
};

const storePlaylistInFS = async (playlist) => {
  const oldSongs = { ...songs };
  const { genre } = playlist;

  oldSongs[genre].push(playlist);

  const updatedData = { ...oldSongs };

  await fs.writeFile(
    path.join(__dirname, "/data/songs.json"),
    JSON.stringify(updatedData),
    (err) => {
      if (err) {
        throw err;
      }
      console.log("success");
    }
  );
};

exports.getAllSongs = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: songs,
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      error: err,
    });
  }
};

exports.createPlayList = async (req, res) => {
  try {
    const data = handleModifyingData(req.body);
    await storePlaylistInFS(data);

    res.status(200).json({
      status: "Success",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
