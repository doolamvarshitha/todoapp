import React, { useState } from 'react';
import { updateTask, deleteTask } from '../utils/api';

const Task = ({ task }) => {
  const [status, setStatus] = useState(task.status);

  const handleStatusChange = async (newStatus) => {
    try {
      const updatedTask = await updateTask(task._id, { status: newStatus });
      setStatus(updatedTask.status);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task._id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div>
        <button onClick={() => handleStatusChange('pending')}>Pending</button>
        <button onClick={() => handleStatusChange('in progress')}>In Progress</button>
        <button onClick={() => handleStatusChange('completed')}>Completed</button>
      </div>
      <p>Status: {status}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
