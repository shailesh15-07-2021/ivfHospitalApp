const ChannelDB = require("../../../model/ChannelModel");

// Load input validations
const validateChannelInput = require("../../../validation/E-learning/ChannelValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateChannelInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  ChannelDB.findByIdAndUpdate(id, req.body, {
    upsert: true,
    new: true,
  })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: "error whie finding Channel Details",
        });
      } else {
        res.status(200).json({
          msg: "Channel Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "error Channel Details update information",
      });
    });
};
