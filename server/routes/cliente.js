var express = require('express');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'jolans',
    password: '1234',
    database: 'emarket'
  })
  
  connection.connect();

  

