const mongoose = require('mongoose');

const examScheduleSchema = mongoose.Schema(
    {
        exam_name: {
            type: String,
            required: true,
        },
        subject_name: {
            type: String,
            required: true,
        },
        selected_class: {
            type: String,
            required: true,
        },
        selected_section: {
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
    {
        timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
    }
);

module.exports = examScheduleSchema;

// exam_name: '',
// subject_name: '',
// selected_class: '',
// selected_section: '',
// time: '',
// date: '',
