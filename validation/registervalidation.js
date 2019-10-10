const Joi = require("@hapi/joi");
const constants = require("../constants/constants");

module.exports.createValidation = async function(data) {
  const createRegisterSchema = Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    mobile: Joi.string()
      .length(10)
      .required(),
    email: Joi.string(),
    roles: Joi.any()
      .valid(constants.roleArray)
      .invalid("Please Select valid Role")
      .required(),
    password: Joi.string()
  });
  return await Joi.validate(data, createRegisterSchema);
};
