// Create web server
// Description: Create a web server that listens on port 3000. When you visit the root of the server in your browser, it should display "Hello, World!".
// Import necessary modules
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});