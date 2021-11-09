const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const examGradesSchema = require('../schemas/examGradesSchema');

const ExamGrades = new mongoose.model('ExamGrades', examGradesSchema);

// Post
router.post('/add-exam-grades', async (req, res) => {
    try {
        const newExamGrades = new ExamGrades(req.body);
        await newExamGrades.save();
        res.send('Exam Grades added Successfully.!');
    } catch (err) {
        return res.sendStatus(404);
    }
});

// Get
router.get('/all-exam-grades', async (req, res) => {
    ExamGrades.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

// update

router.put('/updated-exam-grades', (req, res) => {
    const updatedExamGrades = new ExamGrades({});

    ExamGrades.updateOne({ _id: req.params.id }, updatedExamGrades)
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

//delete

router.delete('/delete-exam-grades/:id', async (req, res) => {
    ExamGrades.findOneAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({
                error: 'There was a server side error',
            });
        } else {
            res.status(200).json({
                message: 'Exam Grades successfully deleted..!',
            });
        }
    });
});

module.exports = router;
