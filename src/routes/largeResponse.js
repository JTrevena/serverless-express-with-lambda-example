const express = require('express');
const jsonBlob = require('../sample.json')

const router = express.Router();

router.get('/', function (req, res, next) {
  res.send({
    jsonBlob
  })
})

module.exports = router;