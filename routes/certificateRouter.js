const certificateController = require('../controllers/certificateController');

const router = require('express').Router();

router.post('/', certificateController.addCertificate);

router.get('/:id', certificateController.findCertificate);

router.get('/', certificateController.findAllCertificates);

// router.patch()
router.put('/:id', certificateController.updateCertificate); // Lock behind auth middleware

router.delete('/:id', certificateController.deleteCertificate); // Lock behind auth middleware

module.exports = router;
