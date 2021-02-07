const addWorkspace = require('./workspace-api/addWorkspace');
const getWorkspace = require('./workspace-api/getWorkspace');
const deleteWorkspace = require('./workspace-api/deleteWorkspace');
const updateWorkspace = require('./workspace-api/updateWorkspace');
const getWorkspaceById = require('./workspace-api/getWorkspaceById');
const addUser = require('./user-api/addUser');
const getUser = require('./user-api/getUser');
const updateUser = require('./user-api/updateUser');
const getUserById = require('./user-api/getUserById');
const generateOtp = require('./user-api/generateOtp');
const verifyOtp = require('./user-api/verifyOtp');

module.exports = {
    addWorkspace: addWorkspace.addWorkspace,
    getWorkspace: getWorkspace.getWorkspace,
    deleteWorkspace: deleteWorkspace.deleteWorkspace,
    updateWorkspace: updateWorkspace.updateWorkspace,
    getWorkspaceById: getWorkspaceById.getWorkspaceById,
    addUser: addUser.addUser,
    updateUser: updateUser.updateUser,
    getUserById: getUserById.getUserById,
    generateOtp: generateOtp.generateOtp,
    verifyOtp: verifyOtp.verifyOtp,
    getUser: getUser.getUser
};
