const express = require('express');
const router = express.Router();
const bagController = require('../controllers/bagController');

// route mapping
router.get('/bag/create', bagController.getCreateForm);
router.post('/bag/create', bagController.createBag);
router.get('/', bagController.getHome);
router.get('/bag', bagController.getBags);
router.get('/bag/:id', bagController.getBagById);
router.get('/bag/update/:id', bagController.getUpdateForm);
router.post('/bag/update/:id', bagController.updateBag);
router.post('/bag/delete/:id', bagController.deleteBag);


module.exports = router;