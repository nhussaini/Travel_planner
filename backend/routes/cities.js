const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

module.exports = (db) => {
  router.post("/getCityData", (req, res) => {
    const allData = {};
    const imageCall = `https://api.unsplash.com/search/photos?page=1&query=${req.body.userInput}&client_id=${process.env.imageKEY}&per_page=8`;
    // const weatherCall = `https://api.weatherbit.io/v2.0/forecast/daily?city=${req.body.userInput}&key=${process.env.weatherKEY}&days=7`;
    const googleCall = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+${req.body.userInput}&key=AIzaSyD6Gw9uN4YpFcH4cIjRbYbWKPl_vGQs0R0`;

    Promise.all([
      axios.get(imageCall),
      // axios.get(weatherCall),
      axios.get(googleCall),
    ]).then((all) => {
      allData.imageData = all[0].data.results;
      allData.googleData = all[1].data.results;
      // console.log(all[0].data.results);
      res.send(allData);
    });
  });
  return router;
};
