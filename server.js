const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { CitizenModel, TitleModel } = require('./models'); // Adjust the path accordingly

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connecting to the MongoDB
mongoose.connect('mongodb+srv://otimjunior:GILLIANZ@cluster0.kqaubaq.mongodb.net/BLB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Handling Citizen Registration Form submission
app.post('/citizen', async (req, res) => {
    try {
        const citizenData = new CitizenModel(req.body);
        await citizenData.save();
        res.status(201).send('Citizen data submitted successfully!');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Handling Title Registration Form submission
app.post('/title', async (req, res) => {
    try {
        const titleData = new TitleModel(req.body);
        await titleData.save();
        res.status(201).send('Title data submitted successfully!');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at port http://localhost:${port}/`)
});