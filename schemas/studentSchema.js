const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
    roll: {
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
    },
    className: {
      type: String,
      required: true,
    },
    section: {
      type: String,
    },
    admissionID: {
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

module.exports = studentSchema;
