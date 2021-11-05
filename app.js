'use strict';
console.clear();

const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const passport = require('passport');
require('./auth')(passport);

const { PORT } = require('./config');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes & Controllers
app.get('/', (req = request, res = response) => {
  res.status(200).send('Hello World!');
});

app.post('/login', (req = request, res = response) => {
  const { user, password } = req.body;

  res.status(200).json({
    msg: 'Posted',
    dataUser: { user, password },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gTWFydGluIiwiaWF0IjoxNTE2MjM5MzMzMDIyfQ.u3rlCMX35hwc2Mdcfpei-_i2xw6Jwl7hX3z-W4lgFL0',
  });
});

app.get(
  '/team',
  passport.authenticate('jwt', { session: false }),
  (req = request, res = response) => {
    res.status(200).send('Hello World!!!');
  }
);

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});

module.exports = app;
