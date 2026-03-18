const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');

router.get('/', controller.getOrders);
router.get('/create', controller.getCreateForm);
router.post('/create', controller.createOrder);

router.get('/:id', controller.getOrderById);

router.get('/update/:id', controller.getUpdateForm);
router.post('/update/:id', controller.updateOrder);

router.post('/delete/:id', controller.deleteOrder);

module.exports = router;