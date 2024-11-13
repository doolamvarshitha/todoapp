const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const TaskSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['pending', 'in progress', 'done', 'completed'], default: 'pending' },
});

module.exports = mongoose.model('Task', TaskSchema);
