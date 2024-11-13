import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Change to useNavigate
import { signup, login } from '../utils/api';

const AuthForm = ({ mode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === 'signup') {
        await signup(formData);
        navigate('/login');  // Use navigate instead of history.push
      } else if (mode === 'login') {
        const { token } = await login(formData);
        localStorage.setItem('token', token);
        navigate('/tasks');  // Use navigate instead of history.push
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>{mode === 'signup' ? 'Sign Up' : 'Login'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        {mode === 'signup' && (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        )}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">{mode === 'signup' ? 'Sign Up' : 'Login'}</button>
      </form>
    </div>
  );
};

export default AuthForm;
