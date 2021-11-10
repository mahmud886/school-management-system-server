const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const classRoutineSchema = require('../schemas/classRoutineSchema');

const ClassRoutine = new mongoose.model('ClassRoutine', classRoutineSchema);

// Post
router.post('/add-class-routine', async (req, res) => {
    try {
        const addClassRoutine = new ClassRoutine(req.body);
        await addClassRoutine.save();
        res.send('Class Routine added Successfully.!');
    } catch (err) {
        return res.sendStatus(404);
    }
});
// Get
router.get('/all-class-routine', async (req, res) => {
    ClassRoutine.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});
// Update
router.put('/updated-class-routine', async (req, res) => {
    const updatedClassRoutine = new ClassRoutine({});
    ClassRoutine.updateOne({ _id: req.params.id }, updatedClassRoutine)
        .then(() => {
            res.status(201).json({
                message: 'Class Routine Updated Successfully!',
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});
// Delete
router.delete('/delete-class-routine/:id', async (req, res) => {
    ClassRoutine.findOneAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({
                error: 'There was a server side error',
            });
        } else {
            res.status(200).json({
                message: 'Class Routine Deleted Successfully!',
            });
        }
    });
});

module.exports = router;
