const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum:['male','female']
    },
    emailId: {
        type: String,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        enum: ['HR', 'Sales', 'Finance', 'Engineer', 'Others'],
        message: '{VALUE} is not supported'
    },
        timestamps:true
});
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

}
module.exports = new UserModel();