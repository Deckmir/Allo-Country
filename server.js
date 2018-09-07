// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var img= require("./assets");
var bodyParser=require('body-parser');
var fs= require('fs');
var jsonFile = require('jsonfile');
var fileName=__dirname + '/public/assets/Data.json';
 

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use("/assets",img);
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());




// http://expressjs.com/en/starter/basic-routing.html
app.get("", function(request, response) {
  response.sendFile(__dirname + '/index/Formulaire.html');
  
});

app.post('/',function(req,res)
         {
    var username = req.body.name;
    var password = req.body.password1;
    var username_login = req.body.name_login;
    var password_login = req.body.password_login;
    var formulaire = req.body.form;
    var note ="";
    var i="";
    
    
  
  if(formulaire=== "sign_out"){
    
    res.sendFile(__dirname + '/index/Formulaire.html');
  }
 
  if(formulaire === "Submit"){
  let userData= fs.readFileSync(fileName);
    userData= JSON.parse(userData);
    userData.push({username:username, password:password, note_tourism:note, note_food:note,note_price:note });
  fs.writeFileSync(fileName, JSON.stringify(userData));
    res.sendFile(__dirname + '/index/Allo-Country.html');


  };
  
  
if(formulaire === "Connection"){
jsonFile.readFile(fileName, function(err, jsonData) {
  if (err) throw err;
  for (var i = 0; i < jsonData.length; ++i) {
if(jsonData[i].username === username_login && jsonData[i].password === password_login ){
  res.sendFile(__dirname + '/index/Allo-Country.html');

}
  
    
  }
});
}
  
  
  
})
  ;





// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
