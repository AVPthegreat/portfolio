const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();
app.use(cors()); // Enable CORS

let count = 0;

app.get('/visitor', (req, res) => {
    count++;
    res.json({ visits: count });
});

app.listen(3000, () => console.log('Server running on port 3000'));
