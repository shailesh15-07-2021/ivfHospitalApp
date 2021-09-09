const ChannelDB = require("../../../model/ChannelModel");
const slugify = require("slugify");
const shortId = require("shortid");

// Load input validations
const validateChannelInput = require("../../../validation/E-learning/ChannelValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateChannelInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const Channel = ChannelDB({
    user: req.body.user,
    category: req.body.category,
    channelName: req.body.channelName,
    channelDesc: req.body.channelDesc,
    channelSlug: `${slugify(req.body.channelName)}-${shortId.generate()}`,
    status: req.body.status,
    image: req.body.image,
  });
  if (req.file) {
    Channel.image = "/public/image/" + req.file.filename;
  }

  Channel.save()
    .then((data) => {
      res.status(201).json({
        msg: "Channel added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating Channel",
      });
    });
};
