const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const utils = require('../utils/utils');

// eslint-disable-next-line consistent-return
exports.authUser = (req, res) => {
  if (req.headers && req.headers.authorization) {
    const authorization = req.headers.authorization.split(' ')[1];
    try {
      // eslint-disable-next-line no-undef
      decoded = jwt.verify(authorization, process.env.JWT_SECRET);
    } catch (e) {
      return res.status(401).send('Invalid User. Cannot Load');
    }
    // eslint-disable-next-line no-undef
    const userId = decoded.sub;
    User.findOne({ where: { id: userId } }).then((user) => {
      const loadedUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      res.status(200).json({
        loadedUser,
        msg: 'User Loaded Successfully',
      });
    });
  }
};

exports.signup = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (!user) {
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          const newUser = {
            firstName,
            lastName,
            email,
            password: hash,
          };
          User.create(newUser)
            .then((savedUser) => {
              const issueToken = utils.issueJWT(savedUser);
              const returnUser = {
                firstName: savedUser.firstName,
                lastName: savedUser.lastName,
                email: savedUser.email,
              };
              res.status(201).json({
                msg: 'Your account has been created successfully.',
                returnUser,
                token: issueToken.token,
                expiresIn: issueToken.expiresIn,
              });
            })
            .catch((err) => {
              res.status(400).json({
                msg: err.message || 'Error Saving User to the Database.',
              });
            });
        })
        .catch(() => {
          res.status(400).json({
            msg: 'Error Securing Your Details. Try Again',
          });
        });
    } else {
      res.status(400).json({
        msg: 'A user with a similar email address already exists',
      });
    }
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } })
    .then((user) => {
      bcrypt
        .compare(password, user.password)
        .then(() => {
          const issueToken = utils.issueJWT(user);
          const returnUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          };
          res.status(200).json({
            msg: 'Login successful',
            returnUser,
            token: issueToken.token,
            expiresIn: issueToken.expiresIn,
          });
        })
        .catch((err) => {
          res.status(401).json({
            msg: err.message || 'Wrong Password. Please Try Again',
          });
        });
    })
    .catch((err) => {
      res.status(401).json({
        msg:
          err.message || 'No user exists with that email. Please sign up First',
      });
    });
};

exports.logout = () => {
  console.log('User Logout Called');
};
