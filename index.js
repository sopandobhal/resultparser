var parse = require("xml-parser");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public/'));

function httpsample(rt, ts, rc){
	this.rt =rt;
	this.ts =ts;
	this.rc =rc;
}

app.get('/',function (req,res) {
	console.log("GET Received: Index");
	res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.post('/',function (req, res) {
	console.log("POST Received: Index");
	var list = [{}];
	var xmlresult = req;
	console.log("req.body: "+req.body.result);
	console.dir(req.body);
	res.send(req.body);
	// console.log(Object.getOwnPropertyNames(req).sort()); 
});

app.get('/about',function (req,res) {
	console.log("GET Received: About");
	res.sendFile(path.join(__dirname+'/public/about.html'));
});

app.listen(3000);
console.log("Running at Port 3000");