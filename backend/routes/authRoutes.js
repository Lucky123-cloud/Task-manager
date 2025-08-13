const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware')
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/authController');


//Auth Routes
router.post("/register", registerUser); // Function to handle user registration
router.post("/login", loginUser); // Function to handle user login
router.get("/profile", protect, getUserProfile); // Function to get user profile
router.get("/profile", protect, updateUserProfile); // Function to get user profile
router.post("/upload-image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded"})
    }

    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl })
})

module.exports = router;