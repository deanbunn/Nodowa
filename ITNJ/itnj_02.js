var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        console.log("....incoming request: " + req.url); 
        res.end();
    })

}).listen(8080);

console.log("System Listening on port 8080....");