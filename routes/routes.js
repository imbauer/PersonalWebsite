var express = require('express');
var router = express.Router();
var request = require('request');

// index page
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/hey', function(req, res) {
    res.send('Hey');
});


router.post('/', function (req, res) {
    res.send( 'Got a POST request' )
});

router.put('/user', function (req, res) {
    res.send( 'Got a PUT request at /user' )
});

router.delete('/user', function (req, res) {
    res.send( 'Got a DELETE request at /user' )
});

module.exports = router;
