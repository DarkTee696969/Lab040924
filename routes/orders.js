const express = require('express');
const router = express.Router();
const Orders = require ('../models/orders')
// Import Controller
const { getOrderse,getOrders,createOrders,updqteOrders,deleteOrders}=require('../controllers/orderController');
// APIs Routing Config
router.get('/orderse',getOrderse);
router.get('/orders/:id',getOrders);
router.post('/orders',createOrders);
router.put('/orders/:id',updqteOrders);
router.delete('/orders/:id',deleteOrders);
// Export router
module.exports = router;
