import React, { useEffect, useState } from 'react';
import { getTasks, createTask } from '../utils/api';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdTask = await createTask(newTask);
      setTasks([...tasks, createdTask]);
      setNewTask({ title: '', description: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Your Tasks</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleChange}
          placeholder="Task Title"
        />
        <input
          type="text"
          name="description"
          value={newTask.description}
          onChange={handleChange}
          placeholder="Task Description"
        />
        <button type="submit">Add Task</button>
      </form>

      <div>
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
