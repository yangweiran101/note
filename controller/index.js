const express = require('express');
const router = express.Router();
const register = require('./register');
const login = require('./login');
const article = require('./article');
const update = require('./update');
const comment = require('./comment');

router.use(register);
router.use(login);
router.use(article);
router.use(update);
router.use(comment);


module.exports = router