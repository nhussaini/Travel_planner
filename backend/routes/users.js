const express = require("express");
const router = express.Router();

/* insert users into database */

module.exports = ({addToDo}) => {

  router.post("/", (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    console.log("******", req.body);
    const queryString = `
      INSERT INTO users (first_name, last_name, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING id;
  `;

    db.query(queryString, [firstName, lastName, email, password]).then((data) =>
      console.log("query data", data)
    );
    res.send("post routeee");
  });

  router.get("/", (req, res, next) => {
    res.send("respond with a resource");
  });

  router.post("/todo", (req, res) => {
    console.log("----> ", req.body);
  })

  return router;
};
