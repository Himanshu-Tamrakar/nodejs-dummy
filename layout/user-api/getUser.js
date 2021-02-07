const userModel = require('../../models/index').userModel;
const success = require('../../requestResponseHandler/success');
const failure = require('../../requestResponseHandler/failure');

module.exports = {
    getUser: async function (req, res) {
        try {
            let userData = await userModel.find();
            success(req, res, userData);
        } catch (err) {
            failure(req, res, err);
        }
    }
}