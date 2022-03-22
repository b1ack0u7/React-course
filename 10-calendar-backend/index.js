const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// const bodyParser = require('body-parser');

const app = express();
dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));


// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


app.listen(process.env.PORT, () => {
  console.log('running on port 3005');
});
