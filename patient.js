const mongoose = require('mongoose');
const PatientSchema = new mongoose.Schema({
  patientId: Number,
  surname: String,
  otherNames: String,
  gender: String,
  phoneNumber: String,
  residentialAddress: String,
  emergencyName: String,
  emergencyContactNumber: String,
  realtionshipWithPtient: String,
});

module.exports = mongoose.model('Patient', PatientSchema);