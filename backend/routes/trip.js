const express = require("express");
const router = express.Router();

/* insert users into database */

module.exports = ({}) => {
  

  router.post("/todo", (req, res) => {
    const todo = req.body.userInput;
    const userId = req.body.userId;
    addToDo(todo, userId).then((data) => console.log("data=>>>", data));
  });




  return router;
};
