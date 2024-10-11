const express = require('express');

const app = express();

// Define the endpoint for the root URL
app.get('/', (_req, res) => {
    res.send('Hello Holberton School!');
});

// Handle all other endpoints with a 404 error
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <title>Error</title>
        </head>
        <body>
        <pre>Cannot GET ${req.url}</pre>
        </body>
        </html>
    `);
});

// Listen on port 1245
app.listen(1245, 'localhost', () => {
    console.log('server running');
});

// Export the app
module.exports = app;
