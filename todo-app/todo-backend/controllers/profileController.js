const User = require('../models/User');

// Controller to get user profile details
exports.getProfile = async (req, res) => {
  const { userId } = req.user; // The user ID is assumed to be available in the req.user after authentication

  try {
    const user = await User.findById(userId).select('-password'); // Exclude the password field
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profile data' });
  }
};

// Controller to update user profile details
exports.updateProfile = async (req, res) => {
  const { userId } = req.user;
  const { name, email, password } = req.body;

  try {
    const updates = { name, email };
    if (password) {
      const bcrypt = require('bcryptjs');
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(password, salt); // Hash the new password if provided
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true }).select('-password');
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update profile data' });
  }
};

// Controller to delete user profile
exports.deleteProfile = async (req, res) => {
  const { userId } = req.user;

  try {
    await User.findByIdAndDelete(userId);
    res.json({ message: 'User profile deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete profile' });
  }
};
