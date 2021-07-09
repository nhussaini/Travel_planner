const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    const { email, password } = req.body;
    console.log("----->", req.body);

    const queryString = `
      SELECT *
      FROM users
      WHERE email = $1;
    `;

    db.query(queryString, [email]).then((data) => {
      console.log("login query", data.rows);
      if (data.rows.length === 0) {
        return res
          .status(400)
          .send({ message: "User not found", status: "error" });
      }

      const user = data.rows[0];
      if (user.password !== password) {
        return res
          .status(400)
          .send({ message: "Invalid password", status: "error" });
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
