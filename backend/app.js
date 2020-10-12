const express = require('express');
const cors = require('cors');
const passport = require('passport');

const userRoutes = require('./routes/users');
const uploadRoutes = require('./routes/upload');
const businessRoutes = require('./routes/business');

const app = express();

// Passport Authentication
require('./config/passportJWT')(passport);

app.use(passport.initialize());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/biz', businessRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/auth', userRoutes);

// Catch 404 and forward to Error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});

module.exports = app;
