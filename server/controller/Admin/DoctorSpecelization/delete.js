const DoctorSpecelizationDB = require("../../../model/DoctorSpecelizationModel");

module.exports = (req, res) => {
  const id = req.params.id;

  DoctorSpecelizationDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete Doctor Specelization Details` });
      } else {
        res.send({
          message: "Doctor Specelization Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Doctor Specelization Details" + err,
      });
    });
};
