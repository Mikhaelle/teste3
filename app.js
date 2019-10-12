const express = require('express');
const app = express();

const credenciaisRoutes = require('./routes/credenciais');
app.use('/provasyscoin', credenciaisRoutes);


module.exports = app;