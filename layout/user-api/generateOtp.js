const userModel = require('../../models/index').userModel;
const success = require('../../requestResponseHandler/success');
const failure = require('../../requestResponseHandler/failure');

module.exports = {
    generateOtp: async function (req, res) {
        try {
            const data = req.body;
            var minm = 100000;
            var maxm = 999999;
            const otp = Math.floor(Math
                .random() * (maxm - minm + 1)) + minm;
            // const otp = Math.random().toString(6);
            const userData = await userModel.updateOne(
                { _id: data._id },
                {
                    $set: {
                        otp: otp
                    }
                }
            )
            success(req, res, { otp }, 'OTP send successfully');
        } catch (err) {
            failure(req, res, err);
        }
    }
}