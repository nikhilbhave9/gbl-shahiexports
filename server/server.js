// boilerplate express code for server.js
const express = require('express');


const app = express();
const port = process.env.PORT || 9000;

// api Get request 
app.get('/api/hello', (req, res) => {
    res.json({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
