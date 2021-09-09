const DoctorDB = require("../../../model/DoctorProfileModel");

module.exports = (req, res) => {
  const id = req.params.id;

  DoctorDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete Doctor Details` });
      } else {
        res.send({
          message: "Doctor Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Doctor Details" + err,
      });
    });
};
