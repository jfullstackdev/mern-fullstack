require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

// Add this line to use express.json() middleware
app.use(express.json());

const personalDetailsRoutes = require('./routes/personal-details');

app.use('/personal-details', personalDetailsRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});