require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routes');

app.use(express.json())

app.use(router);

app.listen(process.env.PORT);
