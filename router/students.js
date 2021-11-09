const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const studentSchema = require('../schemas/studentSchema');

const Student = new mongoose.model('Student', studentSchema);

// Post
router.post('/admission-form', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.send('Success');
    } catch (err) {
        return res.sendStatus(404);
    }
});
// get
router.get('/studentDetails', async (req, res) => {
    Student.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

// Update

// Delete
// delete

router.delete('/student/:id', async (req, res) => {
    const id = req.params._id;
    Student.deleteOne(id, (err) => {
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
