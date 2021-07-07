const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

module.exports = (db) => {
  router.post("/getCityData", (req, res) => {
    console.log(req.body);
    res.send("Reached route");
  });
  return router;
};
