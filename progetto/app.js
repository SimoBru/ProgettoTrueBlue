
// To test the code -> http://localhost:8080/index.html
var http = require('http');
var fs = require('fs');

// Server creation
var server = http.createServer(function (req, res) {
    if(req.url.indexOf('.html') != -1){ //req.url has the pathname, check if it contains '.html'
      fs.readFile(__dirname + '/index.html', function (err, data) { // function to read index.html
        if(err)
          console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    }

    if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it contains '.css'
      fs.readFile(__dirname + '/style.css', function (err, data) { // function to read style.css
        if(err) 
          console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });
    }
});

server.listen(8080);
console.log('Listening to port 8080');