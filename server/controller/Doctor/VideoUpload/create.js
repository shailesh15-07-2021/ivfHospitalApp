const VideoDB = require("../../../model/VideoUploadModel");

const slugify = require("slugify");
const shortId = require("shortid");

// Load input validations
const validateVideoInput = require("../../../validation/E-learning/VideoValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateVideoInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const Video = VideoDB({
    user: req.body.user,
    category: req.body.category,
    channel: req.body.channel,
    name: req.body.name,
    slug: `${slugify(req.body.name)}-${shortId.generate()}`,
    desc: req.body.desc,
    length: req.body.length,
    quality: req.body.quality,
    resolution: req.body.resolution,
    VideoUrl: req.body.VideoUrl,
    status: req.body.status,
  });

  if (req.file) {
    Video.VideoUrl = "/public/Videos/" + req.file.filename;
  }

  Video.save()
    .then((data) => {
      res.status(201).json({
        msg: "Video added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating Video",
      });
    });
};
