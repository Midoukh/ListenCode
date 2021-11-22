require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { createPlayList, getAllSongs } = require("./controller");

const app = express();

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.end("<h1>Express app</h1>");
});

app.post("/add-song", createPlayList);
app.get("/get-songs", getAllSongs);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Serving at port${process.env.PORT || 3000}`);
});
