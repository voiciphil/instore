const router = require('express').Router();
const controller = require('../../../controllers');

router.post('/list', (req, res) => {
  controller.image.getImages(req, res);
});

module.exports = router;
