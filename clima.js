var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filemane, function (err, data) {
        if (err) {
            res.write(404, { 'Content-Type': 'text/html' });
            return res.end("Página Inválida!");
        }
        res.writeHead(200, { 'Coontent-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(80);
