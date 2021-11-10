const mongoose = require('mongoose');
const subjectSchema = mongoose.Schema(
    {
        subject_name: {
            type: String,
            required: true,
        },
        subject_type: {
            type: String,
            required: true,
        },
        class_name: {
            type: String,
            required: true,
        },
        subject_code: {
            type: String,
            required: true,
        },
    },
    { timestaps: true }
);

module.exports = subjectSchema;
