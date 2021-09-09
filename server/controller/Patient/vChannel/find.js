const ChannelDB = require("../../../model/ChannelModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    ChannelDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Channel Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "error while retriving the Channel Details",
        });
      });
  } else {
    ChannelDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
