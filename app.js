
const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/User')

const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());

// 3) ROUTES
app.use('/api/v1/users', userRoute);

app.all('*', (req, res, next) => {
  return res.status(404).json({status: "error", message: `Can't find ${req.originalUrl} on this server!`});
});

module.exports = app;