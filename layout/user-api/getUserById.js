const userModel = require('../../models/index').userModel;
const success = require('../../requestResponseHandler/success');
const failure = require('../../requestResponseHandler/failure');
module.exports = {
    getUserById: function (req, res) {
        try {
            const data = req.body;
            userModel.findOne({ emailId: data.emailId }, function (err, user) {
                if (err) {
                    failure(req, res, err);
                } else {
                    success(req, res, user);
                }
            })
        } catch (err) {
            failure(req, res, err);
        }
    }
}