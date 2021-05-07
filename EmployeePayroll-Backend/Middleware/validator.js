let { body, validateResult } = require('express-validator');
let response = {}
module.exports = {
    register: [
        body('firstname').toString(),
        body('lastname').toString(),
        body('emailId').toString(),
        body('phoneNumber').toString(),
        body('salary').toString(),
        body('department').toString()
    ]
}

module.exports.validateResult = (req, res,next) => {
   try {
    const errors = validateResult(req);
    if (!errors.isEmpty()) {
        response.success = false;
            response.message = "Invalid Credentials!";
            response.error = errors.array();
            return res.status(422).send(response);
    }else{
        next()
    }
   } catch (error) {

       response.success = false;
        response.message = "Something went wrong!"
        return res.status(500).send(response);
   }
}