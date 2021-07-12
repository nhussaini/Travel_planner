const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const db = require("./db");
const dbHelpersUser = require("./helpers/dbHelpersUser")(db);
const dbHelpersCity = require("./helpers/dbHelpersCity")(db);
const dbHelpersTrip = require("./helpers/dbHelpersTrip")(db);


const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const citiesRouter = require("./routes/cities");
const backCitiesRouter = require("./routes/backCities");
const logoutRouter = require("./routes/index");
const tripRouter = require("./routes/trip");
//const todoRouter = require("./routes/todo");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter(dbHelpersUser));
app.use("/back/cities", backCitiesRouter(dbHelpersCity));
// app.use("/users", usersRouter(db));
app.use("/userslogin", loginRouter(db));
app.use("/api/cities", citiesRouter(dbHelpersCity));
app.use("/", indexRouter);
app.use("/api/trip", tripRouter(dbHelpersTrip));
// app.use("/", logoutRouter(db));
// app.use("/todo", todoRouter(db));
// app.use('/users', usersRouter(dbHelpers));

module.exports = app;
