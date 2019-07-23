'use strict';
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/mongoose-movies', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});
const seeds = [
  { name: 'Jesus',
    occupation: 'TA',
    catchPhrase: 'Tiempo al tiempo'
  },
  { name: 'Jackito',
    occupation: 'TA',
    catchPhrase: 'Que pasa tios y tias'
  },
  { name: 'Madhur',
    occupation: 'TA',
    catchPhrase: 'Has probado este juego de móvil...?'
  }];

Celebrity.create(seeds)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
