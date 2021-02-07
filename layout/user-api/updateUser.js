const userModel = require('../../models/index').userModel;
const success = require('../../requestResponseHandler/success');
const failure = require('../../requestResponseHandler/failure');

module.exports = {
    updateUser: async function (req, res) {
        try {
            let data = req.body;
            const userData = await userModel.updateOne(
                { _id: data._id },
                {
                    $set: {
                        name: data.name,
                        companyWebsite: data.companyWebsite,
                        mobileNo: data.mobileNo,
                        companyIndustry: data.companyIndustry,
                        companyName: data.companyName,
                        employeeCount: data.employeeCount,
                        role: data.role,
                        password: data.password,
                        emailId: data.emailId,
                        twoStepVerification: data.twoStepVerification,
                        // smsMobileNo: data.smsMobileNo,
                        questionList: data.questionList,
                        verifyQuestion: data.verifyQuestion
                    }
                }
            )
            success(req, res, userData, 'User profile saved');
        } catch (err) {
            failure(req, res, err);
        }
    }
}