// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create server
http.createServer((req, res) => {
    // Path to file
    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // Extension of file
    const extname = path.extname(filePath);
    // Initial content type
    let contentType = 'text/html';
    // Check extension and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    // Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
}).listen(3000, () => console.log('Server running...'));

// Path: comments.js
// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create server
http.createServer((req, res) => {
    // Path to file
    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // Extension of file
    const extname = path.extname(filePath);
    // Initial content type
    let contentType = 'text/html';
    // Check extension and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
}