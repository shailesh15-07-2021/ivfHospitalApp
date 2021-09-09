const VideoDB = require("../../../model/VideoUploadModel");

// Load input validations
const validateVideoInput = require("../../../validation/E-learning/VideoValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateVideoInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  VideoDB.findByIdAndUpdate(id, req.body, {
    upsert: true,
    new: true,
  })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: "error whie finding Video Details",
        });
      } else {
        res.status(200).json({
          msg: "Video Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "error Video Details update information",
      });
    });
};
