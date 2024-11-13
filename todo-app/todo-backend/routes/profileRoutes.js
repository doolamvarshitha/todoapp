const express = require('express');
const { getProfile, updateProfile, deleteProfile } = require('../controllers/profileController');
const router = express.Router();

// Route to get the profile of the logged-in user
router.get('/', getProfile);

// Route to update the profile of the logged-in user
router.put('/', updateProfile);

// Route to delete the profile of the logged-in user
router.delete('/', deleteProfile);

module.exports = router;
