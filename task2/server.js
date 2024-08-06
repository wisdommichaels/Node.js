// Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000
const http = require("http")
http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});

    response.end("<h1>Hello Node!!!!</h1>\n");

}).listen(3000);
console.log("Server running at http://localhost:3000");