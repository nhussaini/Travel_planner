const express = require("express");
const router = express.Router();

/* insert users into database */

module.exports = ({ addToDo, registerUser, getToDos, removeToDo, getUserTripInfo, getUserTripTodo }) => {
  router.post("/", (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    registerUser(firstName, lastName, email, password).then((data) =>
      console.log("register data====>", data)
    );
  });

  router.get("/", (req, res, next) => {
    res.send("respond with a resource");
  });

  router.post("/todo", (req, res) => {
    const todo = req.body.userInput;
    const userId = req.body.userId;
    addToDo(todo, userId).then((data) => console.log("data=>>>", data));
  });

  router.post("/user-trip", async(req, res) => {
    const {userId} = req.body
    
    //This object stores tripInfo for a user
    const userTripInformation = {};
    userTripInformation.attractions = await getUserTripInfo(userId);
    userTripInformation.todos = await getUserTripTodo(userId);

    res.send(userTripInformation);
  })

  router.get("/todo", (req, res) => {
    getToDos().then((data) => res.send(data));
  });
  
  router.delete("/todo/:id", (req, res) => {
    const id = req.params.id;
    
    // console.log("req.param.id===>", index);
    removeToDo(id);

  })

  return router;
};
