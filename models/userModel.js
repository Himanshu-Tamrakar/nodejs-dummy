"use strict";
const mongoose = require("mongoose");

const user = new mongoose.Schema(
    {
        name: { type: String },
        companyWebsite: { type: String },
        mobileCode: { type: String },
        mobileNo: { type: Number },
        verifyMobile: { type: Boolean },
        companyIndustry: { type: String },
        companyName: { type: String },
        employeeCount: { type: String },
        role: { type: String },
        password: { type: String },
        emailId: { type: String },
        twoStepVerification: { type: Boolean, default: false },
        verifyQuestion: { type: Boolean, default: false },
        // smsMobileCode: { type: String },
        // smsMobileNo: { type: Number },
        // verifySmsMobile: { type: Boolean },
        questionList: { type: Array },
        otp: { type: String }
    },
    {
        collection: "userModel"
    }
);
module.exports = mongoose.model("userModel", user);
