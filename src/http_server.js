const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.end('<h2>Hello</h2>');
});

server.listen(3000);

// go to Chrome -> url: localhost:3000