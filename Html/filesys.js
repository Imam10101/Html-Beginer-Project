
// load http module
const http = require('http');
//create http server
http.createServer((req, res) => {
    // content header
    res.writeHead(200, {'content-type' : 'text/plain'});
    //write message and signal communication is complete
    res.end('Hello , World!');
})
.listen(2400)
console.log('server is running on port 2400');





