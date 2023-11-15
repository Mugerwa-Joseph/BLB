const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
const dbURI = 'mongodb+srv://otimjunior:GILLIANZ@cluster0.kqaubaq.mongodb.net/?retryWrites=true&w=majority'; // Replace with your actual MongoDB URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Check if the connection is successful
const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Your API routes go here

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at port http://localhost:${port}/`)
});
