const mongoose = require('mongoose');

const citizenSchema = new mongoose.Schema({
    name: String,
    dateOfBirth: String,
    fatherName: String,
    motherName: String,
    gender: String,
    bloodGroup: String,
});

const titleSchema = new mongoose.Schema({
    ownerName: String,
    location: String,
    size: Number,
    coordinates: String,
    titleNumber: String,
    satellitePhoto: String,
});

const CitizenModel = mongoose.model('Citizen', citizenSchema);
const TitleModel = mongoose.model('Title', titleSchema);

module.exports = { CitizenModel, TitleModel };
