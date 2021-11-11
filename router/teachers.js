const e = require('express');
const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const teacherSchema = require('../schemas/teacherSchema');

const Teacher = new mongoose.model('Teacher', teacherSchema);

// Post
router.post('/add-teacher', async (req, res) => {
    try {
        const newTeacher = new Teacher(req.body);
        await newTeacher.save();
        res.send('Teacher added successfully.');
    } catch (err) {
        return res.sendStatus(404);
    }
});

// get
router.get('/all-teacher', async (req, res) => {
    Teacher.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

// update
router.put('/update-teacher/:id', (req, res) => {
    const updatedTeacher = new Teacher({});
    Teacher.updateOne({ _id: req.params.id }, updatedTeacher)
        .then(() => {
            res.status(201).json({
                message: 'Teacher updated successfully!',
            });
        })
        .catch((err) => {
            res.status(400).json({
                error: error,
            });
        });
});

// delete
router.delete('/delete-teacher/:id', async (req, res) => {
    Teacher.findOneAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({
                error: 'There was a server side error',
            });
        } else {
            res.status(200).json({
                message: 'Teacher Deleted Successfully!',
            });
        }
    });
});

module.exports = router;
