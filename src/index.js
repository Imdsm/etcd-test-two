var http = require('http'),
    Etcd = new require('node-etcd'),
    etcd = new Etcd('172.17.42.1', '4001');

console.log(process.env);

http.createServer(function(req, res) {
    etcd.get('test-signal', console.log);

    etcd.get('test-signal', function(error, result) {
        res.writeHead(200, {'Content-Type': 'text/plain' });
        res.end('Test signal is: ' + result.node.value);
    });
}).listen(process.env.PORT || 8000);
