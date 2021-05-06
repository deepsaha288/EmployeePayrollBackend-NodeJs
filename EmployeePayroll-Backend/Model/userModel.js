const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    }
}, {
    timestamps: true
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

    retrieveData( callback){
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