const response = {}
const userService = require("../Service/userService");

class UserController {
    createEmployeeController = (req, res) => {
        userService.createEmployeeDataService(req.body, (error, success) => {
            if (error) {
                response.success = false;
                response.message = error.message;
                response.data = error.error;
                return res.status(400).send(response);
            } else {
                response.success = true;
                response.message = success.message;
                response.data = success.success;
                return res.status(200).send(response);
            }
        })
    }

    getEmplyeeController = (req, res) => {
        userService.getEmployeeDataService((error, success) => {
            if (error) {
                response.success = false;
                response.message = error.message;
                response.data = error.error;
                return res.status(400).send(response);
            } else {
                response.success = true;
                response.message = success.message;
                response.data = success.success;
                return res.status(200).send(response);
            }
        })
    }
    deleteEmployeeController = (req, res, next) => {
        try {
            userService.deleteEmployeeDataService(req).then((result) => {
                console.log(result);
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((err) => {
                response.success = false;
                response.message = err.message;
                response.data = err.error;
                return res.status(400).send(response);
            })
        } catch (error) {
            next(error);
        }
    }
    updateEmployeeController = (req, res) => {
        userService.updateEmployeeDataService(req, req.body)
            .then(result => {
                console.log(result);
                response.success = true;
                response.message = "updated successfully";
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((err) => {
                response.success = false;
                response.message = "invalid data to update";
                response.data = err.error;
                return res.status(400).send(response);
            })
    }
    getEmployeeListOne =(req,res)=>{
        userService.getEmployeeServiceOne(req.params.id)
        .then((result)=>{
            console.log(result);
            response.success = true;
            response.message = " successfully find id ";
            response.data = result.data;
            return res.status(200).send(response);
        }).catch((err)=>{
            response.success = false;
            response.message = "not find any particular id";
            response.data = err.error;
            return res.status(400).send(response);
        })
    }
}
module.exports = new UserController();