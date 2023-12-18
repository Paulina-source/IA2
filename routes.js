const express = require('express');
const router = express.Router();
const Patient = require('./models/Patient');
const Encounter = require('./models/Encounter');

router.post('/registerPatient', async (req, res) => {
 const patient = new Patient(req.body);

 try {
    await patient.save();
    res.status(201).json(patient);
 } catch (err) {
    res.status(400).json({ message: err.message });
 }
});

router.post('/startEncounter', async (req, res) => {
 const encounter = new Encounter(req.body);

 try {
    await encounter.save();
    res.status(201).json(encounter);
 } catch (err) {
    res.status(400).json({ message: err.message });
 }
});

module.exports = router;