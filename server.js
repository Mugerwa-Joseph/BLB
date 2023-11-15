const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connecting to the MongoDB
mongoose.connect('mongodb+srv://otimjunior:GILLIANZ@cluster0.kqaubaq.mongodb.net/Orders?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', function (){
    console.log('Connected to Our db, BLB');
});

// Define Mongoose schema and model for Citizen
const citizenSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: String,
  fatherName: String,
  motherName: String,
  gender: String,
  bloodGroup: String,
});

const Citizen = mongoose.model('Citizen', citizenSchema);

// Define Mongoose schema and model for Title
const titleSchema = new mongoose.Schema({
  ownerName: String,
  location: String,
  size: Number,
  coordinates: String,
  titleNumber: String,
  satellitePhoto: String,
});

const Title = mongoose.model('Title', titleSchema);

// Handling Citizen Registration Form submission
app.post('/citizen', async (req, res) => {
  try {
    const citizenData = new Citizen(req.body);
    await citizenData.save();
    res.status(201).send('Citizen data submitted successfully!');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Handling Title Registration Form submission
app.post('/title', async (req, res) => {
  try {
    const titleData = new Title(req.body);
    await titleData.save();
    res.status(201).send('Title data submitted successfully!');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
