const model = require('../Model/userModel');
class UserService {
    addEmployeeService = (obj, callback) => {
        model.userCreate(obj, (error, success) => {
            if (error) {
                callback({ message: 'fail to add user!', error: error })
            } else {
                callback(null, { message: "add new record successfully", success: success })
            }
        })
    }

    getAllData = (callback) => {
        model.retrieveData((error, success) => {
            if (error) {
                callback({ message: "not finding any data ", error: error })
            } else {
                callback(null, { message: "fetching data  successfully", success: success })
            }
        })
    }
    deleteEmployeeData = (req) => {
        return model.deleteData(req.params.id).then(result => {
            if (!result) {
                return ({ message: "data not found !" + req.params.id })
            }
            return ({ message: "Employee data deleted Successfully!", data: result });
        }).catch(err => {
            return ({ message: "Failed to delete data!", error: err });
        })
    }
}

module.exports = new UserService();