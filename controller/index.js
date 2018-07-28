const express = require('express');
const router = express.Router();
const register = require('./register');
const login = require('./login');
const article = require('./article');

router.use(register);
router.use(login);
router.use(article);


module.exports = router