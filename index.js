require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');

const app = express();

// DB Connection
dbConnection();

// CORS
app.use(cors());

const port = process.env.PORT;

app.listen(port, () => {
  console.log('Listening port 4000');
});

app.use(express.json());

// Routes

app.use('/', require('./routes/index.js'));
