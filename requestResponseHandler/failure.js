var chalk = require('chalk');

module.exports = (req, res, error, msg) => {
    req.response = {
        code: 'error',
        error,
        message: msg ? msg : null
    };
    res.status(400).send(req.response);
}