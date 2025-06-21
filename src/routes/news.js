const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');
// NewsController is a class that has methods to handle requests
router.use('/:slug', newsController.show);

router.use('/', newsController.index);

module.exports = router;