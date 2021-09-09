const ChannelDB = require("../../../model/ChannelModel");

module.exports = (req, res) => {
  const id = req.params.id;

  ChannelDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete Channel Details` });
      } else {
        res.send({
          message: "Channel Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Channel Details" + err,
      });
    });
};
