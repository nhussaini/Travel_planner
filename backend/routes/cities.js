const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

module.exports = ({ getUsers }) => {
  //roadGhoat Credentials
  const roadGoatApiAuth = {
    auth: {
      username: "bc8bd73ed4416f3824623910174c4bcf",
      password: "d7055907b51a5ece2b5e4c715fadd789",
    },
  };

  router.post("/getCityData", (req, res) => {
    const cityName = req.body.userInput;
    const allData = {};
    // since Roaggoat data needs two api call, getting this data first before making calls to other api.
    // first get the id of the location for further api calls

    // saving all api quesries in variables
    const imageCall = `https://api.unsplash.com/search/photos?page=1&query=${cityName}&client_id=${process.env.imageKEY}&per_page=8`;
    // const weatherCall = `https://api.weatherbit.io/v2.0/forecast/daily?city=${req.body.userInput}&key=${process.env.weatherKEY}&days=7`;
    const googleCall = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+${cityName}&key=AIzaSyD6Gw9uN4YpFcH4cIjRbYbWKPl_vGQs0R0`;
    axios
      .get(
        `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${cityName}`,
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
            allData.cityData = data.data.data;
          });
      });

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

  router.post("/users", (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  return router;
};
