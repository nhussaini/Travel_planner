const express = require("express");
const router = express.Router();

/* insert users into database */

module.exports = () => {
  

  router.post("/create-trip", (req, res) => {
    console.log("reached this route");
  
  });




  return router;
};
