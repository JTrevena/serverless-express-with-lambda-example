const express = require('express');

const router = express.Router();

router.get('/', function (req, res, next) {
  res.send({
    message: "simpleresponse",
    data: "here is my data" 
  })
})

module.exports = router;