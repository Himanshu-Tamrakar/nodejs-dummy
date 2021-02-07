const workspaceModel = require('../../models/index').workspaceModel;
const success = require('../../requestResponseHandler/success');
const failure = require('../../requestResponseHandler/failure');
module.exports = {
    getWorkspaceById: function (req, res) {
        try {
            const data = req.body;
            workspaceModel.findOne({ _id: data._id }, function (err, workspace) {
                if (err) {
                    failure(req, res, err);
                } else {
                    success(req, res, workspace);
                }
            })
        } catch (err) {
            failure(req, res, err);
        }
    }
}