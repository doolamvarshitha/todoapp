import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import AuthForm from './components/AuthForm';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/login" element={<AuthForm mode="login" />} />
        <Route path="/signup" element={<AuthForm mode="signup" />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<h1>Welcome to the Todo App</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
