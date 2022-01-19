const certificateController = require('../controllers/certificateController');

const router = require('express').Router();

router.post('/', certificateController.addCertificate);

router.get('/:id', certificateController.findCertificate);

router.get('/', certificateController.findAllCertificates);

// router.patch()
router.put('/:id', certificateController.updateCertificate);

router.delete('/:id', certificateController.deleteCertificate);

module.exports = router;
