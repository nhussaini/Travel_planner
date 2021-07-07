const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

//GOOGLE MAPS DATA
//key=AIzaSyD6Gw9uN4YpFcH4cIjRbYbWKPl_vGQs0R0
//https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+toronto&key=AIzaSyD6Gw9uN4YpFcH4cIjRbYbWKPl_vGQs0R0
//https://www.npmjs.com/package/google-maps-react

// const  net = require('follow-redirects').https;
// const fs = require('fs');
// const auth_key = Buffer.from('access_key:d7055907b51a5ece2b5e4c715fadd789').toString('base64');

/* GET home page. */

// const weatherApi = `https://api.weatherbit.io/v2.0/forecast/daily?city=Toronto&key=d3509fa02316452b83ce154197d1139b`;

// const imageApi = `https://api.unsplash.com/search/photos?page=1&query=office&client_id=88i7qHkpW1-r-T3rR0tk7OEwVE4KGDCJD04P_ZLyGYs`;

//Potential api for getting location(city, country, lat, lng) data and get country data based on that
const getLocationInfo = `http://api.geonames.org/searchJSON?q=toronto&name_equals=toronto&isNameRequired=true&maxRows=2&username=coding4flife`;
const getCountryInfo = `https://restcountries.eu/rest/v2/name/Canada?fullText=true`;

//Fetches images for a specific location
router.post("/imageData", (req, res) => {
  // console.log("location", req.body);
  // res.send("Reached Post route");
  const imageAPI = `https://api.unsplash.com/search/photos?page=1&query=${req.body.userInput}&client_id=${process.env.imageKEY}&per_page=8`;

  // console.log("url", url);
  axios
    .get(
      //`https://api.unsplash.com/search/photos?page=1&query=${req.body.userInput}&client_id=88i7qHkpW1-r-T3rR0tk7OEwVE4KGDCJD04P_ZLyGYs`
      imageAPI
    )
    .then((data) => {
      // console.log(data.data.results);
      res.send(data.data.results);
    });
});

//Fectches weather data for a location
router.post("/weatherData", (req, res) => {
  const weatherAPI = `https://api.weatherbit.io/v2.0/forecast/daily?city=${req.body.userInput}&key=${process.env.weatherKEY}&days=7`;

  axios.get(weatherAPI).then((data) => {
    res.send(data.data);
  });
  // res.send("Okay");
});

//Fetches Overview Data for a location
router.post("/locationSummary", (req, res) => {
  // setup credentials for basic auth
  const roadGoatApiAuth = {
    auth: {
      username: "bc8bd73ed4416f3824623910174c4bcf",
      password: "d7055907b51a5ece2b5e4c715fadd789",
    },
  };
  // first get the id of the location for further api calls
  axios
    .get(
      `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${req.body.userInput}`,
      roadGoatApiAuth
    )
    .then((data) => {
      const locationId = data.data.data[0].id;
      // api call to get location data using the location id from previous call
      axios
        .get(
          `https://api.roadgoat.com/api/v2/destinations/${locationId}`,
          roadGoatApiAuth
        )
        .then((data) => {
          res.send(data.data.data);
        });
    });
});

router.post("/thingsToDo", (req, res) => {
  // res.send("Reached ThingstoDo route");
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+${req.body.userInput}&key=AIzaSyD6Gw9uN4YpFcH4cIjRbYbWKPl_vGQs0R0`
    )
    .then((todoData) => {
      res.send(todoData.data.results);
    });
});

router.get("/testRoute", async (req, res) => {
  // res.send("Reached ThingstoDo route");
  console.log("Reached 3001");
  const allData = {};
  try {
    const { data: googleData } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+toronto&key=AIzaSyD6Gw9uN4YpFcH4cIjRbYbWKPl_vGQs0R0`
    );
    allData.googleData = googleData;
    // const { data: roadgoatData } = await axios.get(
    //   `https://api.weatherbit.io/v2.0/forecast/daily?city=toronto&key=${process.env.weatherKEY}&days=7`
    // );
    console.log("google data---", googleData);
    // console.log("roadGoatData---", roadgoatData);
  } catch (error) {
    console.log(error);
  }
  try {
    const { data: weatherData } = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=toronto&key=${process.env.weatherKEY}&days=7`
    );
    console.log("Roadgoat Data----", weatherData);
    allData.weatherData = weatherData;
  } catch (error) {
    console.log(error);
  }
  res.send(allData);
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
