const http = require('http');
const port = 3000;

http.createServer((req,res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World'); 
    }
}).listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 