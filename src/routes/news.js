const express = require('express');
// const { route } = require('express/lib/router');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');
// newsController.index;
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;