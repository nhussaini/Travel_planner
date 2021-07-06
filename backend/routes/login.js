const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    const { email, password } = req.body;
    const queryString = `
        SELECT * FROM users 
        WHERE email = $1 
        AND password = $2
        RETURNING id;`;

    db.query(queryString, [email, password]).then((data) =>
      console.log("login query", data)
    );
    res.send("login post route");
    return router;
  });
};
