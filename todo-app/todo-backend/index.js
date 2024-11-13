require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const profileRoutes = require('./routes/profileRoutes');
const authenticateToken = require('./middleware/auth'); // Import the JWT authentication middleware

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Public routes that do not require authentication
app.use('/api/auth', authRoutes); // Routes for signup and login

// Private routes that require authentication
app.use('/api/tasks', authenticateToken, taskRoutes);     // Task routes with authentication
app.use('/api/profile', authenticateToken, profileRoutes); // Profile routes with authentication

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
