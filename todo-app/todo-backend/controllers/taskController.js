const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  const { userId } = req.user; // Assuming user info is added to req in middleware

  try {
    const task = new Task({ userId, title, description });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Error creating task' });
  }
};

exports.getTasks = async (req, res) => {
  const { userId } = req.user;

  try {
    const tasks = await Task.find({ userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving tasks' });
  }
};

exports.updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, description, status } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(taskId, { title, description, status }, { new: true });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Error updating task' });
  }
};

exports.deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    await Task.findByIdAndDelete(taskId);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting task' });
  }
};
