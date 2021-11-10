const mongoose = require('mongoose');
const classRoutineSchema = mongoose.Schema(
    {
        day: {
            type: String,
            required: true,
        },
        class_name: {
            type: String,
            required: true,
        },
        subject_name: {
            type: String,
            required: true,
        },
        section: {
            type: String,
            required: true,
        },
        teacher_name: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
    { timestaps: true }
);

module.exports = classRoutineSchema;
