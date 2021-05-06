const route = require('express').Router();
const userController = require('../Controller/userController');


route.post('/employee',userController.addEmployeeController);

route.get('/employee', userController.findAll);

module.exports = route;