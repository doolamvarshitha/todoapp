const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // Get the MongoDB connection string from environment variables
    const dbURI = process.env.MONGO_URI;

    // Connect to MongoDB
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;

