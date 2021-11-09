const mongoose = require('mongoose');
const examGradesSchema = mongoose.Schema(
    {
        grade_name: {
            type: String,
            required: true,
        },
        grade_point: {
            type: String,
            required: true,
        },
        percentage_form: {
            type: String,
            required: true,
        },
        percentage_upto: {
            type: String,
            required: true,
        },
        comments: {
            type: String,
            required: true,
        },
    },
    { timestaps: true }
);

module.exports = examGradesSchema;
