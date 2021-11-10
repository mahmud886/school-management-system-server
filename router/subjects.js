const express = require('express');
const mongose = require('mongoose');

const router = express.Router();

const subjectSchema = require('../schemas/subjectSchema');

const Subject = new mongose.model('Subject', subjectSchema);

// Post
router.post('/add-subject', async (req, res) => {
    try {
        const addSubject = new Subject(req.body);
        await addSubject.save();
        res.send('Subject added Successfully.!');
    } catch (err) {
        return res.sendStatus('404');
    }
});
// Get
router.get('/all-subjects', async (req, res) => {
    Subject.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});
// Update
router.put('/updated-subject/:id', (req, res) => {
    const updatedSubject = new Subject({});

    Subject.updateOne({ _id: req.params.id }, updatedSubject)
        .then(() => {
            res.status(201).json({
                message: 'Subject updated successfully',
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});
// Delete
router.delete('/delete-subject/:id', async (req, res) => {
    Subject.findOneAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({
                error: 'There was a server side error',
            });
        } else {
            res.status(200).json({
                message: 'Subject Deleted Successfully.!',
            });
        }
    });
});

module.exports = router;
