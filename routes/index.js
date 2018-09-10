var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host : 'sg06.tmd.cloud',
  user : 'affilout_root',
  password : 'shivakrishna1995',
  database : 'affilout_Demo'
});

con.connect(function(err){
  if(err){
    console.log(err);
  }
  console.log('connected.');
});

router.get('/', function(req, res, next) {
});

module.exports = router;
