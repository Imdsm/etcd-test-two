var http = require('http'),
    etcd = new require('node-etcd')();

http.createServer(function(req, res) {
    etcd.get('test-signal', function(result) {
        res.writeHead(200, {'Content-Type': 'text/plain' });
        res.end('Test signal is: ' + result);
    });
}).listen(process.env.PORT || 8000);
