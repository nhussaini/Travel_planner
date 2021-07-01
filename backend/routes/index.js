const express = require("express");
const router = express.Router();
const axios = require("axios");

/* GET home page. */

const weatherApi = `https://api.weatherbit.io/v2.0/forecast/daily?city=Toronto&key=d3509fa02316452b83ce154197d1139b`;

router.get("/weatherData", (req, res) => {
  // axios
  //   .get(weatherApi)
  //   .then((data) => data.json())
  //   .then((data) => console.log(data));
  res.send("Okay");
});
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
