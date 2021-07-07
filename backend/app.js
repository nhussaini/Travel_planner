const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db");
// const dbHelpers = require('./helpers/dbHelpers')(db);

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const cityRouter = require("./routes/city");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter(db));
app.use("/usersLogin", loginRouter(db));
app.use("/cities", cityRouter(db));
app.use("/", indexRouter);
// app.use('/users', usersRouter(dbHelpers));

module.exports = app;
