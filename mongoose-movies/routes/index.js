'use strict';
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const celebritiesList = await Celebrity.find();
    console.log(celebritiesList);

    res.render('celebrities/index', { celebritiesList });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
