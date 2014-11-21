var http = require('http'),
    Etcd = new require('node-etcd'),
    etcd = new Etcd('127.0.0.1', '4001');

http.createServer(function(req, res) {
    etcd.get('test-signal', function(result) {
        res.writeHead(200, {'Content-Type': 'text/plain' });
        res.end('Test signal is: ' + result);
    });
}).listen(process.env.PORT || 8000);
