const express = require('express');
const mongoose = require('mongoose');
const debug = require('debug')('server');
const chalk = require('chalk');
const cors = require('cors');
const staffRoutes = require('./routes/staffRoutes');

const path = require('path');

const PORT = 4000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', staffRoutes);

mongoose
  .connect('mongodb://localhost:27017/schoolDB')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      debug(`Server is running on port ${chalk.green(PORT)}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });