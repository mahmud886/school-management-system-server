const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const noticeSchema = require('../schemas/noticeSchema');

const Notice = new mongoose.model('Notice', noticeSchema);

// Post
router.post('/add-notice', async (req, res) => {
    try {
        const newNotice = new Notice(req.body);
        await newNotice.save();
        res.send('Notice added successfully.!');
    } catch (err) {
        return res.sendStatus(404);
    }
});
// Get

router.get('/all-notices', async (req, res) => {
    Notice.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

// Update
router.put('/updated-notices/:id', (req, res) => {
    const updatedNotice = new Notice({
        title: req.body.title,
        notice_type: req.body.notice_type,
        description: req.body.description,
        post_by: req.body.post_by,
    });
    Notice.updateOne({ _id: req.params.id }, updatedNotice)
        .then(() => {
            res.status(201).json({
                message: 'Thing updated successfully!',
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});

// delete

router.delete('/delete-notices/:id', async (req, res) => {
    Notice.findOneAndRemove({ _id: req.params.id }, (err) => {
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

module.exports = router;
