const db = require('../models/index');

const Certificates = db.Certificates;

// Create
const addCertificate = async (req, res) => {
  try {
    const certificate = await Certificates.create({
      initialAmount: req.body.initialAmount,
      interestRate: req.body.interestRate,
      startDate: req.body.startDate,
      maturityDate: req.body.maturityDate,
      userId: req.body.userId,
    });
    res.status(200).send(certificate);
  } catch (error) {
    console.error('Error adding certificate:', error);
    res.status(500).send('Error communicating with the database.');
  }
};

// Read (one)
const findCertificate = async (req, res) => {
  try {
    const certificate = await Certificates.findOne({
      where: { id: req.params.id },
    });
    if (certificate) {
      res.status(200).send(certificate);
    } else {
      res.status(404).send('Could not locate the specified certificate.');
    }
  } catch (error) {
    console.error('Error finding certificate:', error);
    res.status(500).send('Error communicating with the database.');
  }
};

// Read (all)
const findAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificates.findAll({});
    res.status(200).send(certificates);
  } catch (error) {
    console.error('Error finding certificates:', error);
    res.status(500).send('Error communicating with the database.');
  }
};

// Update
const updateCertificate = async (req, res) => {
  try {
    const certificate = await Certificates.update(
      {
        initialAmount: req.body.initialAmount,
        interestRate: req.body.interestRate,
        startDate: req.body.startDate,
        maturityDate: req.body.maturityDate,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).send(certificate);
  } catch (error) {
    console.error('Error deleting certificate:', error);
    res.status(500).send('Error communicating with the database.');
  }
};

// Delete
const deleteCertificate = async (req, res) => {
  try {
    const certificate = await Certificates.destroy({
      where: { id: req.params.id },
    });
    res.status(200).send(certificate);
  } catch (error) {
    console.error('Error deleting certificate:', error);
    res.status(500).send('Error communicating with the database.');
  }
};

module.exports = {
  addCertificate,
  findCertificate,
  findAllCertificates,
  updateCertificate,
  deleteCertificate,
};
