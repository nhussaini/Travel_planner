const express = require("express");
const router = express.Router();

/* insert users into database */

module.exports = ({
  addToDo,
  registerUser,
  getToDos,
  getUserTrip,
  removeTrip,
  getUserTripAttractions,
  getUserTripTodo,
}) => {
  router.post("/", (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    registerUser(firstName, lastName, email, password).then((data) =>
      res.send(data ? "success" : null)
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

  router.post("/user-trip", async (req, res) => {
    const { userId } = req.body;
    //This object stores tripInfo for a user
    // const userTripInformation = {};
    const trips = await getUserTrip(userId);
    res.send(trips);
  });

  router.delete("/trip/:id", (req, res) => {
    const id = req.params.id;
    console.log("Reached Here", id);
    console.log(removeTrip);
    removeTrip(id).then((data) => console.log(data));
  });

  // Get trip attractions and todos
  router.post("/trip-data", async (req, res) => {
    const { trip_id } = req.body;
    const tripData = {};
    tripData.attractions = await getUserTripAttractions(trip_id);
    tripData.todos = await getUserTripTodo(trip_id);
    res.send(tripData);
  });

  router.get("/todo", (req, res) => {
    getToDos().then((data) => res.send(data));
  });

  // router.delete("/todo/:id", (req, res) => {
  //   const id = req.params.id;
  //   removeToDo(id);
  // });
  return router;
};
