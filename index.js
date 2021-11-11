// external import
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const students = require('./router/students');
const teachers = require('./router/teachers');
const notices = require('./router/notices');

const users = require('./router/users');
const examSchedule = require('./router/examSchedules');
const examGrades = require('./router/examGrades');
const subjects = require('./router/subjects');
const classRoutines = require('./router/classRoutines');
const allBooks = require('./router/allBooks');

// internal imports

const app = express();
// request parsers
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// database connection
mongoose
    .connect('mongodb://localhost/sms', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database Connected.'))
    .catch((err) => console.log(err));

// routing setup
app.use('/', students);
app.use('/', teachers);
app.use('/', notices);
app.use('/', users);
app.use('/', examSchedule);
app.use('/', examGrades);
app.use('/', subjects);
app.use('/', classRoutines);
app.use('/', allBooks);

// Server Listening
app.listen(3005, () => {
    console.log('App Listening on PORT 3005');
});
