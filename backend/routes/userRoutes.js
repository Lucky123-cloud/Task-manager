const express = require('express');
const { adminOnly, protect } = require('../middlewares/authMiddleware');
const { getUsers, getUserById, deleteUser } = require("../controllers/userController");

const router = express.Router();


//user management routes
router.get("/", protect, adminOnly, getUsers) //Get all users (admin-only);
router.get("/:id", protect, adminOnly, getUserById); //Get a specific user
router.delete("/:id", protect, adminOnly, deleteUser) //Delete a user (Admin-only)


module.exports =router;