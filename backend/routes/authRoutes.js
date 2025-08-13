const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/authController');


//Auth Routes
router.post("/register", registerUser); // Function to handle user registration
router.post("/login", loginUser); // Function to handle user login
router.get("/profile", protect, getUserProfile); // Function to get user profile
router.get("/profile", protect, updateUserProfile); // Function to get user profile

module.exports = router;