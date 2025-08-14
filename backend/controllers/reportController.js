const Task = require("../models/Task");
const User = require("../models/User");
const excelJs = require("exceljs");

//@desc Export all tasks as an Excel file
//@route GET /api/reports/esport/tasks
//@access Private (Admin)
const exportTasksReport = async (req, res) => {
    try {

    } catch (error) {
        res
            .status(500)
            .json({ message: "Error exporting tasks", error: error.message });
    }
};

//@desc Export user-task report as Excel file
//@route GET /api/reports/export/users
//@access Private (Admin)
const exportUsersReport = async (req, res) => {};

module.exports = {
    exportTasksReport,
    exportUsersReport,
};