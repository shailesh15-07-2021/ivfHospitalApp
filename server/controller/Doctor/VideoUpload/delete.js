const VideoDB = require("../../../model/VideoUploadModel");

module.exports = (req, res) => {
  const id = req.params.id;

  VideoDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete Video Details` });
      } else {
        res.send({
          message: "Video Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Video Details" + err,
      });
    });
};
