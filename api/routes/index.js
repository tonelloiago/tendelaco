const { Router } = require('express');
const routes = Router();
const PurchaseController = require('../Controllers/PurchaseController');

routes.get('/', (req, res) => {res.send("Welcome to tendel store API!")})
routes.post('/', PurchaseController.purchase);

module.exports = routes;