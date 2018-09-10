var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection;

var con = mysql.createConnection({
  host : 'sg06.tmd.cloud',
  user : 'affilout_root',
  password : 'shivakrishna1995',
  database : 'affilout_Demo'
});

router.get('/', function(req, res, next) {
  con.connect(function(err){
    if(err){
      res.send('error');
    }
    else{
      res.send('connected');
    }
  });
});

module.exports = router;

