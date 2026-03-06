const Task = require("../models/Task");

// create task
const createTask = async (req, res) => {

  try {

    const { title, description } = req.body;

    const task = new Task({
      title,
      description,
      userId: req.user.id
    });

    await task.save();

    res.status(201).json({
      message: "Task created",
      task
    });

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

// get all tasks for logged-in user
const getTasks = async (req, res) => {

  try {

    const tasks = await Task.find({ userId: req.user.id });

    res.json(tasks);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

// get single task by id
const getTaskById = async (req, res) => {

  try {

    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

// update task
const updateTask = async (req, res) => {

  try {

    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const { title, description, status } = req.body;

    if (title) task.title = title;
    if (description) task.description = description;
    if (status) task.status = status;

    const updatedTask = await task.save();

    res.json(updatedTask);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

// delete task
const deleteTask = async (req, res) => {

  try {

    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.deleteOne();

    res.json({ message: "Task deleted successfully" });

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };