const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },

        user_type: {
            type: String,
            required: true,
        },

        gender: {
            type: String,
            required: false,
        },
        dob: {
            type: String,
            required: true,
        },
        idNo: {
            type: String,
            required: true,
        },

        religion: {
            type: String,
            required: true,
        },

        department: {
            type: String,
            required: true,
        },
        section: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
        },
    },
    {
        timestamp: true,
    }
);

module.exports = userSchema;
