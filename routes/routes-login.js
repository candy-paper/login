var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'Express' });
    console.log(req.param('username')  )
    console.log(req.param('password')  )
});


module.exports = router;
