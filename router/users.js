const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const userSchema = require('../schemas/userSchema');

const User = new mongoose.model('User', userSchema);

// Post
router.post('/add-user', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.send('User added Successfully...!');
    } catch (err) {
        return res.sendStatus(404);
    }
});

//Get
router.get('/all-users', async (req, res) => {
    User.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});
// Delete
router.delete('/delete-user/:id', async (req, res) => {
    User.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({
                error: 'There was a server side error',
            });
        } else {
            res.status(200).json({
                message: 'User Successfully Deleted..!',
            });
        }
    });
});

module.exports = router;
