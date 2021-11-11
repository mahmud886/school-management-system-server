const mongoose = require('mongoose');
const allBooksSchema = mongoose.Schema(
    {
        book_id: {
            type: String,
            required: true,
        },
        book_name: {
            type: String,
            required: true,
        },
        subject_name: {
            type: String,
            required: true,
        },
        writter_name: {
            type: String,
            required: true,
        },
        class_name: {
            type: String,
            required: true,
        },
        published: {
            type: String,
            required: true,
        },
        creating_date: {
            type: String,
            required: true,
        },
    },
    { timestaps: true }
);

module.exports = allBooksSchema;
