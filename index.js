require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./database/config');

const app = express();

// DB Connection
dbConnection();

const port = process.env.PORT;

app.listen(port, () => {
  console.log('Listening port 4000');
});

app.use(express.json());

// Routes

app.use('/', require('./routes/index.js'));
