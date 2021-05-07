const route = require('express').Router();
const userController = require('../Controller/userController');
const validator = require('../Middleware/validator');


route.post('/employee',  userController.addEmployeeController);

route.get('/employee', userController.findAll);

module.exports = route;