// Create web server that can accept incoming requests and respond with comments
// This file will be executed by the Node.js runtime

// Load the http module to create an http server.
var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  var callback = query.callback;
  var comments = [
    { name: 'John', message: 'Hello' },
    { name: 'Jane', message: 'Hi' }
  ];
  var json = JSON.stringify(comments);
  var jsonp = callback + '(' + json + ')';
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(jsonp);
});

// Listen on port 8000, IP defaults to