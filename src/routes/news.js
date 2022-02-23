const express = require('express');
// const { route } = require('express/lib/router');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');
// newsController.index;
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;