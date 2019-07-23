'use strict';

const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/new', async (req, res, next) => {
  try {
    res.render('celebrities/new');
  } catch (error) {
    next(error);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect('/celebrities');
  } catch (error) {
    next(error);
  }
});

router.get('/:name', async (req, res, next) => {
  const name = req.params.name;
  try {
    const celebritiesDetail = await Celebrity.findOne({ name });

    res.render('celebrities/show', celebritiesDetail);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
