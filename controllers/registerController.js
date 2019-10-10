const registerserviceObj = require("../services/registerservice");
const registervalidateObj = require("../validation/registervalidation");

module.exports.registerDetails = async function(req, res) {
  try {
    await registervalidateObj.createValidation(req.body);
    let result = await registerserviceObj.registerDetails(req.body);
    return res
      .status(200)
      .json({ status: true, data: result, message: "Data Send Successfully" });
  } catch (e) {
    return res.status(400).json({ err: e });
  }
};
