const workspaceModel = require('../../models/index').workspaceModel;
const success = require('../../requestResponseHandler/success');
const failure = require('../../requestResponseHandler/failure');

module.exports = {
    updateWorkspace: async function (req, res) {
        try {
            let data = req.body;
            const workspaceData = await workspaceModel.updateOne(
                { _id: data._id },
                {
                    $set: {
                        status: data.status
                    }
                }
            )
            success(req, res, workspaceData);
        } catch (err) {
            failure(req, res, err);
        }
    }
}