const controller = require("../controllers/task.controller");

module.exports = [
  {
    path: "/",
    method: "GET",
    router: controller.getTasks,
  },
  {
    path: "/:id",
    method: "GET",
    router: controller.getTask,
  },
  {
    path: "/",
    method: "POST",
    router: controller.addTask,
  },
  {
    path: "/:id",
    method: "PUT",
    router: controller.editTask,
  },
  {
    path: "/:id",
    method: "DELETE",
    router: controller.removeTask,
  },
];
