const PastPrescriptionDB = require("../../../model/PastPrescriptionModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    PastPrescriptionDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Patient Past Prescription Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            "error while retriving the Patient Past Prescription Details",
        });
      });
  } else {
    PastPrescriptionDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
