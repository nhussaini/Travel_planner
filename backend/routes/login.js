const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/users-login", (req, res) => {
    const { email, password } = req.body;
    const queryString = ``;
    return router;
  });
};
