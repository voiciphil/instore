var express = require('express');
var router = express.Router();
var controller = require('../../controllers/index');

router.post('/image/list', (req, res, next) => {
  controller.image.getImages(req, res, next);
});

module.exports = router;
