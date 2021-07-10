const express = require("express");
const router = express.Router();
require("dotenv").config();

module.exports = (dbHelpers) => {
  router.get("/trending", (req, res) => {
    console.log("Reached Here");
    res.send("Reached /back route");
  });
  return router;
};
