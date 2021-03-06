//var mysql = require('mysql');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
const importData = require("./data.json");

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "arcserve",
//   password: "Arcserve@2020",
//   database: "alexaDB"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
//con.connect(function(err) {
  //if (err) throw err;
  app.get('/alexanotifications', (req, res) => {
      // con.query("SELECT * FROM alexa_notifications", function (err, result, fields) {
      //   if (err) throw err;
        return res.send(importData["notifications"]);
      });
  //});
  app.get('/status',(req, res) => {
      // con.query("SELECT * FROM alexa_status", function(err, status, fields) {
      //     if(err) throw err;
          return res.send(importData["status"]);        
      });
    //});
  app.get('/failures',(req, res) => {
      // con.query("SELECT * FROM alexa_failures", function(err, failures, fields) {
      //     if(err) throw err;
          return res.send(importData["failures"]);        
      });
  //});
//});
var server = app.listen(port, function () {
    console.log("Example app listening " + port);
});