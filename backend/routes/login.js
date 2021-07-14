const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    const { email, password } = req.body;

    const queryString = `
      SELECT *
      FROM users
      WHERE email = $1;
    `;

    db.query(queryString, [email]).then((data) => {
      if (data.rows.length === 0) {
        return res.send(null);
      }
      const user = data.rows[0];
      if (user.password !== password) {
        return res.send(null);
      }
      delete user.password;
      return res.status(200).send(user);
    });
  });

  router.get("/", (req, res) => {
    res.send("login get route");
  });
  return router;
};
