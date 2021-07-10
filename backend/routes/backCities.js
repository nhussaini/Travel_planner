const express = require("express");
const router = express.Router();
require("dotenv").config();

module.exports = ({ getTopCity }) => {
  router.get("/trending", async (req, res) => {
    console.log("Reached Here");
    const topCities = await getTopCity();
    res.send(topCities);
  });
  return router;
};
