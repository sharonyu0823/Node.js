const http = require('http');
const fs = require('fs').promises;

const server = http.createServer((req, res) => {
    // 呼叫的時候就會去寫

    fs.writeFile(__dirname + '/headers.txt', JSON.stringify(req.headers))
        .then(data => {
            console.log({ data });

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.end(`<h2>${req.url}</h2>`);
        })

    // 呼叫的時候就會寫入Network

    // res.writeHead(200, {
    //     'Content-Type': 'text/html'
    // });

    // res.end(`<h2>${req.url}</h2>`);
})

server.listen(3000);