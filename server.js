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

app.post("/toggle/:id", (req, res) => {

    const id = parseInt(req.params.id);

    if (todos[id]) {
        todos[id].completed = !todos[id].completed;
    }

    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {

    const id = parseInt(req.params.id);

    if (todos[id]) {
        todos.splice(id, 1);
    }

    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
