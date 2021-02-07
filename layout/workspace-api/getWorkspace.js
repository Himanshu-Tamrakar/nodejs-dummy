const workspaceModel = require('../../models/index').workspaceModel;
const success = require('../../requestResponseHandler/success');
const failure = require('../../requestResponseHandler/failure');

module.exports = {
    getWorkspace: async function (req, res) {
        try {
            const data = req.body;
            let workspaceData = await workspaceModel.find({ status: { $in: data.status } });
            success(req, res, workspaceData);
        } catch (err) {
            failure(req, res, err);
        }
    }
}