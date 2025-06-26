const express = require('express');
const app = express();
const port = 3000;

// A simple route
app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
