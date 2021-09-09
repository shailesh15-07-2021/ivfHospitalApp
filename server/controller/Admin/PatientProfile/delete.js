const PatientDB = require("../../../model/PatientProfileModel");

module.exports = (req, res) => {
  const id = req.params.id;

  PatientDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete Patient Details` });
      } else {
        res.send({
          message: "Patient Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Patient Details" + err,
      });
    });
};
