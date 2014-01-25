var express = require("express");
var app 	= express();
var messages = [];

app.configure(function() {
	app.use(express.bodyParser());
	app.use(function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});
});
app.get('/', function(req, res){
	console.log('im here');
	res.send(messages);
	res.end(JSON.stringify(messages));
});

app.post('/',function(req, res){
	var posting = req.body
	messages.push(posting);
	console.log(posting);
	console.log("postinggg");
	res.end();
});

app.get('/', function(req, res) {
	console.log('gettting');
	res.end(JSON.stringify(messages));
})

app.listen(8765);
console.log('Listening on port 8765');



//using just node
// var http 	 = require('http'),
// 	messages = [],
// 	port 	 = 8765;

// function callBack (request, response) {
	
// 	response.writeHead(200, {
// 		'Content-Type': 'application/json', 
// 		'Access-Control-Allow-Origin':'*'
// 		});

//   if (request.url == '/api/messages') {	
// 	if(request.method == 'GET') {
// 		response.write(JSON.stringify(messages));
// 	}
//   }

//   if (request.url == '/api/messages/add') {	
// 	if (request.method == 'POST') {
// 		var postData = '';

// 		request.on('data', function(chunk) {
// 			postData += chunk.toString();
// 		});

// 		request.on('end', function() {
// 			messages.push(JSON.parse(postData));
// 			// console.log(JSON.parse(postData));
// 		});
//   	}
//   	if (request.method == 'OPTIONS') {
// 		response.writeHead(200, {
// 			'Content-Type': 'text/plain', 
// 			'Access-Control-Allow-Origin':'*',
// 			'Access-Control-Method':'GET, POST, DELETE',
// 			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 		});
// 	}
//   }
	
	
	
// 	response.end();
// }

// http.createServer(callBack).listen(port);



// console.log('Server running at ' + port + ", good job!");
