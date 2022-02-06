const registermodelObj = require("../models/register");

module.exports.registerDetails = async function(data) {
  return await registermodelObj.create(data);
};
