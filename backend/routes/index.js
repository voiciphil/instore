var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/image/list', (req, res, next) => {
  controller.image.getImages(req, res, next);
});

module.exports = router;
