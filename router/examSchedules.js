const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const examScheduleSchema = require('../schemas/examScheduleSchema');

const ExamSchedule = new mongoose.model('ExamSchedule', examScheduleSchema);

// Post

router.post('/add-exam-schedule', async (req, res) => {
    try {
        const newExamSchedule = new ExamSchedule(req.body);
        await newExamSchedule.save();
        res.send('Exam Schedule added Successfully..!');
    } catch (err) {
        return res.sendStatus(404);
    }
});

// Get
router.get('/all-exam-schedule', async (req, res) => {
    ExamSchedule.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

// Updade
router.put('/updated-exam-schedule/:id', (req, res) => {
    const updatedExamSchedule = new ExamSchedule({});
    ExamSchedule.updateOne({ _id: req.params.id }, updatedExamSchedule)
        .then(() => {
            res.status(201).json({
                message: 'Exam Schedule updated successfully!',
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});

// Delete
router.delete('/delete-exam-schedule/:id', async (req, res) => {
    ExamSchedule.findOneAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({
                error: 'There was a server side error',
            });
        } else {
            res.status(200).json({
                message: 'Exam Schedule successfully deleted..!',
            });
        }
    });
});

module.exports = router;
