const model = require("../models/task.model");

module.exports = {
  getTasks: (req, res) => {
    const tasks = model;
    res.json({ tasks });
  },

  getTask: (req, res) => {
    const { id } = req.params;
    const tasks = model;

    var task;
    task = tasks.filter((tk) => tk.id == id)[0];

    if (task == undefined) task = "No task found!";

    res.json({ task });
  },

  addTask: (req, res) => {
    const { title, description } = req.body;

    if (!title && !description)
      return res.json({ message: "Invalid data", status: 400 });

    const tasks = model;
    const ultId = tasks[tasks.length - 1] ? tasks[tasks.length - 1].id : 1;

    const nTask = {
      id: ultId + 1,
      title,
      description,
      finished: false,
      user: 1,
      createdAt: Date.now(),
    };

    model.push(nTask);

    res.json({ status: 200, task: nTask });
  },

  editTask: (req, res) => {
    const { id } = req.params;

    const tasks = model;
    const tkIndex = tasks.findIndex((tk) => tk.id == id);

    const eTask = { ...tasks[tkIndex], ...req.body };

    model.splice(tkIndex, tkIndex == 0 ? 1 : tkIndex, eTask);
    res.json({ status: 200, task: eTask });
  },

  removeTask: (req, res) => {
    const { id } = req.params;

    const tasks = model;
    const tkIndex = tasks.findIndex((tk) => tk.id == id);

    model.splice(tkIndex, 1);
    res.json({ status: 200, task: tasks[tkIndex] });
  },
};
