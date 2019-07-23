'use strict';

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/mongoose-movies', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

Celebrity.find(celebrities);
