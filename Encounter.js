const mongoose = require('mongoose');

const EncounterSchema = new mongoose.Schema({
 patientId: Number,
 date: Date,
 type: String,
});

module.exports = mongoose.model('Encounter', EncounterSchema);