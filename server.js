const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');

const app = express();
const PORT = 3000;
require('dotenv').config();
const URL = process.env.MONGO_URL;
// MongoDB Connection
mongoose
  .connect(
    URL
  )
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log('MongoDB connection error:', err));

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); 

// Routes
app.use('/', formRoutes);

// Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
