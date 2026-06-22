const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let todos = [];

app.get("/", (req, res) => {
  res.render("index", { todos });
});

app.post("/add", (req, res) => {
  const task = req.body.task;

  if (task && task.trim() !== "") {
    todos.push(task);
  }

  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
