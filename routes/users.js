const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Detta blir vad servern visar');
});

module.exports = router;
