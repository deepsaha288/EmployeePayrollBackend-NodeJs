const model = require('../Model/userModel');
class UserService {
    createEmployeeDataService = (obj, callback) => {
        model.createUserData(obj, (error, success) => {
            if (error) {
                callback({ message: 'fail to add user!', error: error })
            } else {
                callback(null, { message: "add new record successfully", success: success })
            }
        })
    }

    getEmployeeDataService = (callback) => {
        model.retrieveUserData((error, success) => {
            if (error) {
                callback({ message: "not finding any data ", error: error })
            } else {
                callback(null, { message: "fetching data  successfully", success: success })
            }
        })
    }
    deleteEmployeeDataService = (req) => {
        return model.deleteUserData(req.params.id).then(result => {
            if (!result) {
                return ({ message: "data not found !" + req.params.id })
            }
            return ({ message: "Employee data deleted Successfully!", data: result });
        }).catch(err => {
            return ({ message: "Failed to delete data!", error: err });
        })
    }
    updateEmployeeDataService = (obj) => {
    

        return model.updateUserData(obj.body, obj.params.id)
            .then(result => {
                return ({ message: "successfully updated data", data: result });
            }).catch(err => {
                return ({ message: "fail to update", error: err });
            })
    }
    getEmployeeServiceOne=(req)=>{
        return model.userDataSingle(req)
        .then((result)=>{
            return ({message:"find successfully by single id ",data:result}) 
        }).catch((err)=>{
            return ({message:"could't find any id ",error:err})
        })
    }
}

module.exports = new UserService();