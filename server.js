
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
    todos.push({
      text: task.trim(),
      completed: false
    });
  }

  res.redirect("/");
});

app.post("/toggle/:index", (req, res) => {
  const index = Number(req.params.index);

  if (Number.isInteger(index) && index >= 0 && index < todos.length) {
    todos[index].completed = !todos[index].completed;
  }

  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
