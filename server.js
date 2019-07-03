var express = require("express");
var app = express();

var PORT = process.env.PORT||3004;
app.get('/',function(req,res){
    res.send('helooooooo');
});

app.listen(PORT,function(){
    console.log("done");
});

