const express = require('express');
const router = express.Router();
const register = require('./register');
const login = require('./login');
const article = require('./article');
const update = require('./update');

router.use(register);
router.use(login);
router.use(article);
router.use(update);


module.exports = router