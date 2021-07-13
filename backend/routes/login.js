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
        return res
          .status(400)
          .send({ message: "User not found", status: "error" });
      }

      const user = data.rows[0];
      if (user.password !== password) {
        return res.send(null);
      }
      console.log("Before---", user);
      delete user.password;
      console.log("its a Match!!!!");
      console.log(user);
      return res.status(200).send(user);
    });
  });

  router.get("/", (req, res) => {
    res.send("login get route");
  });
  return router;
};
