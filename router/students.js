const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const studentSchema = require('../schemas/studentSchema');

const Student = new mongoose.model('Student', studentSchema);

// Post
router.post('/add-student', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.send('Success');
    } catch (err) {
        return res.sendStatus(404);
    }
});
// get
router.get('/all-students', async (req, res) => {
    Student.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

// Update
router.put('/update-student/:id', async (req, res) => {
    const updatedStudent = new Student({});
    Student.updatedOne({ _id: req.params.id }, updatedStudent)
        .then(() => {
            res.status(201).json({
                message: 'Student Updated Successfully!',
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});

// delete

router.delete('/delete-student/:id', async (req, res) => {
    Student.findOneAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({
                error: 'There was a server side error!',
            });
        } else {
            res.status(200).json({
                message: 'Notice successfully deleted..!',
            });
        }
    });
});
// Export
module.exports = router;
