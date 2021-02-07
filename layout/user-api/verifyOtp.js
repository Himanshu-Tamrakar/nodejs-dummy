const userModel = require('../../models/index').userModel;
const success = require('../../requestResponseHandler/success');
const failure = require('../../requestResponseHandler/failure');

module.exports = {
    verifyOtp: function (req, res) {
        try {
            const data = req.body
            userModel.findOne({ _id: data._id }, function (err, user) {
                if (err) {
                    failure(req, res, err);
                } else {
                    if (user.otp === data.otp) {
                        updateUser(req, res, data, user)
                    } else {
                        failure(req, res, {});
                    }
                }
            })
        } catch (err) {
            failure(req, res, err);
        }
    }
}


async function updateUser(req, res, data, user) {
    const userData = await userModel.updateOne(
        { _id: data._id },
        {
            $set: {
                mobileCode: data.mobileCode,
                mobileNo: data.mobileNo,
                verifyMobile: true
            }
        }
    )
    if (userData) {
        user.verifyMobile = true;
        user.mobileCode = data.mobileCode;
        user.mobileNo = data.mobileNo;
        success(req, res, user, 'OTP verified successfully');
    }
}
