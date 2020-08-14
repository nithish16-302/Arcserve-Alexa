var mysql = require('mysql');
var express = require('express');
var app = express();


var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "Arcserve@2020",
  database: "alexaDB"
});

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/
app.get('/Notifications', (req, res) => {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM alexa_notifications", function (err, result, fields) {
          if (err) throw err;
          return res.send(result);
        });
      });
});
app.get('/Status',(req, res) => {
    con.connect(function(err){
        if(err) throw err;
        con.query("SELECT * FROM alexa_status", function(err, result1, fields) {
            if(err) throw err;
            return res.send(result1);        
        
        });
    });


});
var server = app.listen(3000, function () {
    var host = '127.0.0.1'
    var port = '3000'
    console.log("Example app listening at http://%s:%s", host, port)
});