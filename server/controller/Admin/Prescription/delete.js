const PrescriptionDB = require("../../../model/PrescriptionModel");

module.exports = (req, res) => {
  const id = req.params.id;

  PrescriptionDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete Prescription Details` });
      } else {
        res.send({
          message: "Prescription Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Prescription Details" + err,
      });
    });
};
