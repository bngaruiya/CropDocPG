const express = require('express');

const router = express.Router();

const uploadCtrl = require('../controllers/uploads');
// const toS3 = require('../middleware/ImageUpload');

// const singleS3Upload = toS3.single('image');

router.get('/', uploadCtrl.getAllUploads);
router.post('/', uploadCtrl.createUpload);
router.get('/:id', uploadCtrl.getOneUpload);
router.delete('/:id', uploadCtrl.deleteUpload);

module.exports = router;
