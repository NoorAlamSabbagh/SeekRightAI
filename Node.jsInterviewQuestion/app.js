const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    const responseData = {
        message: 'Hello, world!',
        timestamp: new Date().toISOString(),
        success: true
    };

    res.writeHead(200);
    res.end(JSON.stringify(responseData));
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
