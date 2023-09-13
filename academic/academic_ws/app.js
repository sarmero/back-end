var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var achievementsRouter = require('./routes/achievements');
var adminnRouter = require('./routes/adminn');
var biographyRouter = require('./routes/biography');
var calendarRouter = require('./routes/calendar');
var curriculumRouter = require('./routes/curriculum');
var day_weekRouter = require('./routes/day_week');
var departmentRouter = require('./routes/department');
var department_chatRouter = require('./routes/department_chat');
var department_messagesRouter = require('./routes/department_messages');
var evaluationRouter = require('./routes/evaluation');
var eventRouter = require('./routes/event');
var facultyRouter = require('./routes/faculty');
var formationRouter = require('./routes/formation');
var inscriptionRouter = require('./routes/inscription');
var materialRouter = require('./routes/material');
var noteRouter = require('./routes/note');
var observationRouter = require('./routes/observation');
var offerRouter = require('./routes/offer');
var plan_studyRouter = require('./routes/plan_study');
var professionRouter = require('./routes/profession');
var programmingRouter = require('./routes/programming');
var publicationsRouter = require('./routes/publications');
var publication_commentRouter = require('./routes/publication_comment');
var publication_likeRouter = require('./routes/publication_like');
var regionRouter = require('./routes/region');
var rolleRouter = require('./routes/rolle');
var semesterRouter = require('./routes/semester');
var statesRouter = require('./routes/states');
var state_offerRouter = require('./routes/state_offer');
var studentRouter = require('./routes/student');
var subjectRouter = require('./routes/subject');
var teacherRouter = require('./routes/teacher');
var themeRouter = require('./routes/theme');
var timetableRouter = require('./routes/timetable');
var title_biographyRouter = require('./routes/title_biography');
var type_evaluationRouter = require('./routes/type_evaluation');
var type_eventRouter = require('./routes/type_event');
var type_materialRouter = require('./routes/type_material');
var type_teacherRouter = require('./routes/type_teacher');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/achievements', achievementsRouter);
app.use('/adminn', adminnRouter);
app.use('/biography', biographyRouter);
app.use('/calendar', calendarRouter);
app.use('/curriculum', curriculumRouter);
app.use('/day_week', day_weekRouter);
app.use('/department', departmentRouter);
app.use('/department_chat', department_chatRouter);
app.use('/department_messages', department_messagesRouter);
app.use('/evaluation', evaluationRouter);
app.use('/event', eventRouter);
app.use('/faculty', facultyRouter);
app.use('/formation', formationRouter);
app.use('/inscription', inscriptionRouter);
app.use('/material', materialRouter);
app.use('/note', noteRouter);
app.use('/observation', observationRouter);
app.use('/offer', offerRouter);
app.use('/plan_study', plan_studyRouter);
app.use('/profession', professionRouter);
app.use('/programming', programmingRouter);
app.use('/publications', publicationsRouter);
app.use('/publication_comment', publication_commentRouter);
app.use('/publication_like', publication_likeRouter);
app.use('/region', regionRouter);
app.use('/rolle', rolleRouter);
app.use('/semester', semesterRouter);
app.use('/states', statesRouter);
app.use('/state_offer', state_offerRouter);
app.use('/student', studentRouter);
app.use('/subject', subjectRouter);
app.use('/teacher', teacherRouter);
app.use('/theme', themeRouter);
app.use('/timetable', timetableRouter);
app.use('/title_biography', title_biographyRouter);
app.use('/type_evaluation', type_evaluationRouter);
app.use('/type_event', type_eventRouter);
app.use('/type_material', type_materialRouter);
app.use('/type_teacher', type_teacherRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;