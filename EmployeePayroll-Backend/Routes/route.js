const route = require('express').Router();
const userController = require('../Controller/userController');
const validator = require('../Middleware/validator');


route.post('/employee', userController.createEmployeeController);
route.get('/employee', userController.getEmplyeeController);
route.delete('/employee/:id', userController.deleteEmployeeController);
route.put('/employee/:id', userController.updateEmployeeController);
route.get('/employee/:id',userController.getEmployeeListOne);
module.exports = route;