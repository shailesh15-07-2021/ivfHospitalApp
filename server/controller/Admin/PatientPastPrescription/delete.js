const PastPrescriptionDB = require("../../../model/PastPrescriptionModel");

module.exports = (req, res) => {
  const id = req.params.id;

  PastPrescriptionDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete Patient Past Prescription Details` });
      } else {
        res.send({
          message: "Patient Past Prescription Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Patient Past Prescription Details" + err,
      });
    });
};
