const { Router } = require('express');
const routes = Router();
const PurchaseController = require('../Controllers/PurchaseController');

routes.post('/', PurchaseController.purchase);

module.exports = routes;