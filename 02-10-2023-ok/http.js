// Import the built-in 'http' module to create an HTTP server
const http = require('http');

// Create an HTTP server using the createServer method
// This method takes a callback function that handles incoming requests (req) and sends responses (res)
const server = http.createServer((req, res) => {
    // End the response with a message: "Hello World"
    res.end('Hello World');
});

// Start the server and make it listen on port 5500
// Once the server starts, the callback function logs a message to the console
server.listen(5500, () => {
    console.log('The server is running....');
});

