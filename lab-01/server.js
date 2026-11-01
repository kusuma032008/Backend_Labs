
const express = require('express');

const app = express();

// Route 1: Home page
app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Backend Lab 1!');
});

// Route 2: About page
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'G. Kusuma',
        section: 'AIDE - 2A'
    });
});

// Route 3: Current date and time
app.get('/time', (req, res) => {
    res.status(200).send(new Date().toString());
});

// Route 4: Handle unknown routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express server running on port ${PORT}`);
});
