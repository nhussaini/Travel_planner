const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

/* GET home page. */

const weatherApi = `https://api.weatherbit.io/v2.0/forecast/daily?city=Toronto&key=d3509fa02316452b83ce154197d1139b`;

router.post("/imageTest", (req, res) => {
  console.log(req.body.location);
  // res.send("Reached Post route");

  axios
    .get(
      `https://api.unsplash.com/search/photos?page=1&query=${req.body.location}&client_id=${process.env.imageKEY}`
    )
    .then((data) => {
      // console.log(data.data.results);
      res.send(data.data.results);
    });
});

router.get("/weatherData", (req, res) => {
  axios.get(weatherApi).then((data) => {
    res.send(data.data);
  });
  // res.send("Okay");
});

router.get("/imageData", (req, res) => {
  console.log("Line 18", req.params.body);
  axios.get(imageApi).then((data) => {
    // console.log(data.data.results);
    res.send(data.data.results);
  });
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
