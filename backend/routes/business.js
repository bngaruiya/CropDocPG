const express = require('express');

const router = express.Router();

const businessCtrl = require('../controllers/business');

router.get('/', businessCtrl.getBiz);
router.post('/register', businessCtrl.registerBiz);
router.get('/:id', businessCtrl.getOneBiz);
router.delete('/:id', businessCtrl.deleteBiz);

module.exports = router;
