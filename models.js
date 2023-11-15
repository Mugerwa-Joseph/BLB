// models.js
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://otimjunior:GILLIANZ@cluster0.kqaubaq.mongodb.net/BLB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define multiple models
const CitizenModel = mongoose.model('citizen', {
  Name: String,
  dateOfBirth: String, 
  fatherName: String,
  motherName: String, 
  gender: String, 
  bloodGroup: String 
});

const TitleModel = mongoose.model('title', {
    ownerName: String,
    location: String, 
    size: Number,
    coordinates: String,
    titleNumber: String,
    satellitePhoto: String 
});

// Export the models
module.exports = { CitizenModel, TitleModel };
