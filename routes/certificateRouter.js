const certificateController = require('../controllers/certificateController');

const router = require('express').Router();

router.post('/', certificateController.addCertificate);

// POST with the user's ID in the req.body in order to retrieve only that user's CDs
router.post('/byUser', certificateController.filterCertificates);

router.get('/:id', certificateController.findCertificate);

router.get('/', certificateController.findAllCertificates);

// router.patch()
router.put('/:id', certificateController.updateCertificate); // Lock behind auth middleware

router.delete('/:id', certificateController.deleteCertificate); // Lock behind auth middleware

module.exports = router;
