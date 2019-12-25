var router = require('express').Router();
var controller = require('../../../controllers');

router.post('/list', (req, res, next) => {
  controller.image.getImages(req, res, next);
});

module.exports = router;
