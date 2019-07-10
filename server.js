var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT||3004;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/data", function(req, res) {
    return res.json(tables);
});

app.get("/api/repo", function(req, res) {
    res.sendFile(path.join(__dirname, "https://github.com/monali22/friendFinder"));
});

app.post("/survey", function(req, res) {
    var person = req.body;
});


app.listen(PORT,function(){
    console.log("done");
});

