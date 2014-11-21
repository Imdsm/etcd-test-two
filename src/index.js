var http = require('http'),
    Etcd = new require('node-etcd'),
    etcd = new Etcd('172.17.42.1', '4001');

http.createServer(function(req, res) {
    if (req.url === '/') {
        etcd.get('test-signal', function(error, result) {
            res.writeHead(200, {'Content-Type': 'text/plain' });
            res.end('Test signal is: ' + result.node.value);
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain' });
        res.end('Not found');
    }
}).listen(process.env.PORT || 8000);
