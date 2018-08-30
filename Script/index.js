// index.js

const express = require('express');
var app =express();
var http = require("http").Server(app).listen(3000);

console.log('WebSite launched');

app.get('/',(req, res) =>{
	res.sendFile(__dirname+"/indexo.html");
});
app.get('/style.css',(req, res) =>{
	res.sendFile(__dirname+"/style.css");
});


