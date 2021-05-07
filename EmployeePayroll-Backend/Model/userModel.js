const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, 'First name is compulsory']
    },
    lastName: {
        type: String,
        required: [true, 'Last  name is compulsory']
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    emailId: {
        type: String,
        unique: [true, 'Email ID is compulsory'],
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Mobile number is compulsory']
    },
    salary: {
        type: Number,
        required: [true, 'salary  is compulsory']
    },
    department: {
        type: String,
        enum: ['HR', 'Sales', 'Finance', 'Engineer', 'Others'],
    }
}, { timestamps: true });


let users = mongoose.model('users', userSchema);

class UserModel {
    userCreate(obj, callback) {
        users.create(obj, (error, success) => {
            if (error) {
                callback(error)
            } else {
                callback(null, success)
            }
        })
    }

    retrieveData(callback) {
        users.find((error, success) => {
            if (error) {
                callback(error)
            } else {
                callback(null, success)
            }
        })
    }
    deleteData = (req) =>{
        return new Promise((resolve, reject) =>{
            users.findByIdAndDelete(req).then(result =>{
                resolve(result)
            }).catch(err =>{
                reject(err)
            })
        })
    }
  
}
module.exports = new UserModel();