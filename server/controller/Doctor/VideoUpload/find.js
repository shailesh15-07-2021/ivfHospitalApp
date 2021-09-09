const VideoDB = require("../../../model/VideoUploadModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    VideoDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Video Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "error while retriving the Video Details",
        });
      });
  } else {
    VideoDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
