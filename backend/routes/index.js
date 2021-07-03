const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

/* GET home page. */

const weatherApi = `https://api.weatherbit.io/v2.0/forecast/daily?city=Toronto&key=d3509fa02316452b83ce154197d1139b`;
// const imageApi = `https://api.unsplash.com/search/photos?page=1&query=office&client_id=88i7qHkpW1-r-T3rR0tk7OEwVE4KGDCJD04P_ZLyGYs`;

//Fetches images for a specific location
router.post("/imageTest", (req, res) => {
  console.log("location", req.body);
  // res.send("Reached Post route");
  const url = `https://api.unsplash.com/search/photos?page=1&query=${req.body.userInput}&client_id=${process.env.imageKEY}&per_page=8`;

  // console.log("url", url);
  axios
    .get(
      //`https://api.unsplash.com/search/photos?page=1&query=${req.body.userInput}&client_id=88i7qHkpW1-r-T3rR0tk7OEwVE4KGDCJD04P_ZLyGYs`
      url
    )
    .then((data) => {
      // console.log(data.data.results);
      res.send(data.data.results);
    });
});


//Fectches weather data for a location
router.post("/weatherData", (req, res) => {
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
