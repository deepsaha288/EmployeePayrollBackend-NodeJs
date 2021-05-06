let { body, validateResult } = require('express-validator');
module.exports = {
    register: [
        body('firstname').toString.require,
        body('lastname').toString,
        body('emailId').toString,
        body('phoneNumber').toString,
        body('salary').toString,
        body('department').toString
    ]
}

module.exports.validateResult = (req, res,next) => {
    const errors = validateResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }else{
        next()
    }
}