const Task = require("../models/Task");


//@desc GET all task (admin: all, User: only assigned tasks)
//@route GET /api/tasks/
//@access Private

const getTasks = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

//@desc GET task by ID
//@route GET /api/tasks/:id
//@access Private

const getTaskById = async (req, res) => {

}

//@desc Create a new task (admin only)
//@route POST /api/tasks/
//@access Private (Admin)
const createTask = async (req, res) => {
    try {
        const {
            title,
            description,
            priority,
            dueDate,
            assignedTo,
            attachments,
            todoChecklist,
        } = req.body

        if (!Array.isArray(assignedTo)) {
            return res
                .status(400)
                .json({ message: "assignedTo must be an array of user IOs "});
        }

        const task = await Task.create({
            title,
            description,
            priority,
            dueDate,
            createdBy: req.user._id,
            todoChecklist,
            attachments,
        });

        res.status(201).json({ message: "Task created successfully", task})
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

//@desc Update task details
//@route POST /api/tasks/
//@access Private
const updateTask = async (req, res) => {};

//@desc Delete a task (Admin only)
//@route DELETE /api/tasks/:id
//@access Private (Admin)
const deleteTask = async (req, res) => {};

//@desc Update Task status
//@route PUT /api/tasks/:id/todo
//@access private
const updateTaskStatus = async (req, res) => {};

//@desc update Task checklist
//@route PUT /api/tasks/:id/todo
//@access Private
const updateTaskChecklist = async (req, res) => {};

//@desc Dashboard data (admin only)
//@route GET /api/tasks/dashboard-data
//@access Priavte
const getDashboardData = async (req, res) => {};

//@desc  Dashboard Data (User-Specific)
//@route GET /api/tasks/user-dashboard-data
//@access Private
const getUserDashboardData = async (req, res) => {};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    updateTaskChecklist,
    getDashboardData,
    getUserDashboardData
};