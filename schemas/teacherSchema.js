const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    idNo: {
      type: String,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    section: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
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
    role: {
      type: String,
      default: "student",
    },
  },
  {
    timestamp: true,
  }
);

module.exports = teacherSchema;
