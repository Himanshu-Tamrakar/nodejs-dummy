"use strict";
const mongoose = require("mongoose");

const workspace = new mongoose.Schema(
    {
        workspaceName: { type: String },
        status: { type: String },
        type: { type: String },
        workspaceHierarchy: { type: String },
        role: { type: String },
        workspaceMapperId: { type: String },
        createdOn: { type: Date, default: new Date() }
    },
    {
        collection: "workspaceModel"
    } 
);
module.exports = mongoose.model("workspaceModel", workspace);
