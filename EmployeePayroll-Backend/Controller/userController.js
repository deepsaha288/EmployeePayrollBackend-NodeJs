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
}
module.exports = new UserController();