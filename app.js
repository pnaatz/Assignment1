var express = require("express");
var app = express();
var fs = require('fs');

app.get('/', function(req,res){
    res.sendFile(__dirname + "/HTML/index.html");
});

app.listen(3000, function(){
    console.log("runnign on 3000");
})