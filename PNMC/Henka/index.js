/*
* Primary file for the API
*
*/

//Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// The server should respond to all requests with a string
const server = http.createServer(function(req,res){

	// Get the URL and parse it
	var parsedUrl = url.parse(req.url,true);	

        // Get the path
	var path = parsedUrl.pathname;
	var trimmedPath = path.replace(/^\/+|\/+$/g,'');

	// Get the query string as an object
	var queryStringObject = parsedUrl.query;

	// Get the HTTP Method
	var method = req.method.toLowerCase();

	// Get the headers as an object
	var headers = req.headers;

	// Get the payload, if any
	var decoder = new StringDecoder('utf-8');

	// Send the Response
	res.end('Hello Dean\n');

	// Log the request path
	console.log('Request received on path: ' + trimmedPath + ' with method ' + method +' and with these query string parameters ', queryStringObject);
	
	// Log the request headers
	console.log('Reqest had these headers ', headers);
});


// Start the server, and have it listen on port 3000
server.listen(3000,function(){
	console.log('The server is listening on port 3000 now');
});
