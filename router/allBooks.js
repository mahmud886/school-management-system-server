const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const allBooksSchema = require('../schemas/allBooksSchema');

const AllBooks = new mongoose.model('AllBooks', allBooksSchema);

// Post
router.post('/add-new-book', async (req, res) => {
    try {
        const addNewBook = new AllBooks(req.body);
        await addNewBook.save();
        res.send('Book Added Successfully.!');
    } catch (err) {
        return res.sendStatus('404');
    }
});

// Get
router.get('/all-books', async (req, res) => {
    AllBooks.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

// Update
router.put('/updated-book/:id', async (req, res) => {
    const updatedBook = new AllBooks({});

    AllBooks.updateOne({ _id: req.params.id }, updatedBook)
        .then(() => {
            res.status(201).json({
                message: 'Book Updated Successfully!',
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
});

// Delete
router.delete('/delete-book/:id', async (req, res) => {
    AllBooks.findOneAndRemove({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({
                error: 'There was a server side error',
            });
        } else {
            res.status(200).json({
                message: 'Book deleted successfully!',
            });
        }
    });
});

module.exports = router;
