const express = require("express");
const router = express.Router();
require("dotenv").config();

module.exports = ({ getTopCity, getCity, getAttractions }) => {
  router.get("/trending", async (req, res) => {
    const topCities = await getTopCity();
    res.send(topCities);
  });

  router.post("/new-trip", async (req, res) => {
    console.log("Reached here", req.body.city);
    const cityData = {};
    cityData.cityInfo = await getCity();
  });

  return router;
};
