// var http = require('http');  //brings in http module
// http.createServer(function(request, response) {
// 	response.writeHead(200, {'Content-type':'text/plain'});
// 	response.end('Hello');
// }).listen(1337, '127.0.0.1');    // tell it which port to listen to
// console.log('Webserver has started');

var http = require('http');  //brings in http module
var fs = require('fs');  //file system module
http.createServer(function(request, response) {
	fs.readFile('index.html', function(err, data) {
		response.writeHead(200, {'Content-type':'text/html'})
		response.end(data);
	});
	
}).listen(1337, '127.0.0.1');    // tell it which port to listen to
console.log('Webserver has started');