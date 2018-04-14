const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');


// Initialize Server
const app = express();
const port = 3001;

// Middlewares
app.use(json());
app.use(cors());

// Endpoints


// Server Listening 
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});