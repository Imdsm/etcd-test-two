var http = require('http'),
    Etcd = new require('node-etcd'),
    etcd = new Etcd('127.0.0.1', '4001');

console.log(process.env);

http.createServer(function(req, res) {
    // etcd.get('test-signal', function(result) {
    //     res.writeHead(200, {'Content-Type': 'text/plain' });
    //     res.end('Test signal is: ' + result);
    // });
    console.log('getting "test-signal" value: ');
    etcd.get('test-signal', console.log);

    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end('Test signal is: ' + 'n/a');
}).listen(process.env.PORT || 8000);
