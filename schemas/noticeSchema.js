const mongoose = require('mongoose');

const noticeSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        notice_type: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        post_by: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
    }
);

module.exports = noticeSchema;
