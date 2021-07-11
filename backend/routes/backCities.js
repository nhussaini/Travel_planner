const express = require("express");
const router = express.Router();
require("dotenv").config();

module.exports = ({ getTopCity, getCity, getAttractions }) => {
  router.get("/trending", async (req, res) => {
    const topCities = await getTopCity();
    res.send(topCities);
  });

  router.post("/new-trip", async (req, res) => {
    const { city } = req.body;
    const cityData = {};
    cityData.cityInfo = await getCity(city);
    cityData.cityAttractions = await getAttractions(city);
    res.send(cityData);
  });
  return router;
};
