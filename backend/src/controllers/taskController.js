import Task from "../models/task.js";

export const createTask = async (req, res) => {
  const { description, completed } = req.body;

  try {
    const task = new Task({ description, completed });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.log(`Error in Create Task, ${error.message}`);
    res.status(500).json({ error: "Failed to Create Task" });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(`Error in Get Tasks, ${error}`);
    res.status(500).json({ error: "Failed to Get Tasks" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { completed } = req.body;
    const task = await Task.updateOne(
      { _id: req.params.id },
      { $set: { completed } }
    );
    res.status(200).json(task);
  } catch (error) {
    console.log(`Error in Update Task, ${error.message}`);
    res.status(400).json({ error: "Failed to Update Task" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.deleteOne({ _id: req.params.id });
    res.status(200).json(task);
  } catch (error) {
    console.log(`Error in Update Task, ${error.message}`);
    res.status(400).json({ error: "Failed to Delete Task" });
  }
};
