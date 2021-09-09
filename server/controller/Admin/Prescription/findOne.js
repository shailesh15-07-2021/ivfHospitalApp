const PrescriptionDB = require("../../../model/PrescriptionModel");

module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    PrescriptionDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Prescription Details Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
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
