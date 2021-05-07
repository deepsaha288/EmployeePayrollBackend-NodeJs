const response = {}
const userService = require("../Service/userService");

class UserController {
    addEmployeeController = (req, res) => {
        userService.addEmployeeService(req.body, (error, success) => {
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

    findAll = (req, res) => {
        userService.getAllData((error, success) => {
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
    deleteEmployee = (req,res,next) =>{
        try {
            userService.deleteEmployeeData(req).then((result)=>{
                console.log(result);
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((err)=>{
                response.success = false;
                response.message = err.message;
                response.data = err.error;
                return res.status(400).send(response);
            })
        } catch (error) {
            next(error);
        }
    }
}
module.exports = new UserController();