const userModel = require('../../models/index').userModel;
const success = require('../../requestResponseHandler/success');
const failure = require('../../requestResponseHandler/failure');

module.exports = {
    addUser: function (req, res) {
        try {
            const data = req.body;
            if (Array.isArray(data)) {
                userModel.insertMany(data).then((result) => {
                    success(req, res, result);
                });
            }
            // else {
            //     let workspaceData = new userModel();
            //     workspaceData.workspaceName = data.workspaceName;
            //     workspaceData.type = data.type;
            //     workspaceData.status = data.status;
            //     workspaceData.workspaceHierarchy = data.workspaceHierarchy;
            //     workspaceData.role = data.role;
            //     workspaceData.workspaceMapperId = data.workspaceMapperId;
            //     workspaceData.save(err => {
            //         if (err) {
            //             failure(req, res, err);
            //         } else {
            //             success(req, res, workspaceData);
            //         }
            //     })
            // }
        } catch (err) {
            failure(req, res, err);
        }
    }
}
