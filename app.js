const express = require("express");
const app = express();

// Aplication Settings
app.listen(3001, "localhost", () =>
  console.log("Start on http://localhost:3001")
);

app.set("view engine", "ejs");
app.set("views", "./views");

// Aplication Middleware
const path = require("path");
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.static(path.resolve(__dirname, "uploads")));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const method = require("method-override");

app.use(method("m"));

const cookie = require("cookie-parser");

app.use(cookie("something"));

const session = require("express-session");

app.use(session({ resave: false, saveUninitialized: true, secret: "dh task" }));

//  Aplication Middleware Custom

app.use(require("./middlewares/user"));

// Aplication Routes

app.use(require("./routes/user.routes"));

const isLogged = require("./middlewares/isLogged");

app.use("/tasks", isLogged, require("./routes/task.routes"));
