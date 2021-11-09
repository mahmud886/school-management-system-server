const express = require("express");

const mongoose = require("mongoose");

const router = express.Router();

const teacherSchema = require("../schemas/teacherSchema");

const Teacher = new mongoose.model("Teacher", teacherSchema);

// Post
router.post("/add-teacher", async (req, res) => {
  try {
    const newTeacher = new Teacher(req.body);
    await newTeacher.save();
    res.send("Teacher added successfully.");
  } catch (err) {
    return res.sendStatus(404);
  }
});

// get

// update

// delete

module.exports = router;
