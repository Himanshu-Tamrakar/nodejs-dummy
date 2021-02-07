var express = require("express");
var router = express.Router();
var workspace = require('../layout/index');

router.post("/getWorkspace", workspace.getWorkspace);

router.post("/addWorkspace", workspace.addWorkspace);

router.patch("/updateWorkspace", workspace.updateWorkspace);

router.post("/deleteWorkspace", workspace.deleteWorkspace);

router.post("/getworkspaceById", workspace.getWorkspaceById);

router.get('/getUser', workspace.getUser);

router.post('/addUser', workspace.addUser);

router.post('/getUserById', workspace.getUserById);

router.patch('/updateUser', workspace.updateUser);

router.post('/sendOtp', workspace.generateOtp)

router.post('/verifyOtp', workspace.verifyOtp)

module.exports = router;
