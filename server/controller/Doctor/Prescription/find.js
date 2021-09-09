const PrescriptionDB = require("../../../model/PrescriptionModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    PrescriptionDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Prescription Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "error while retriving the Prescription Details",
        });
      });
  } else {
    PrescriptionDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
