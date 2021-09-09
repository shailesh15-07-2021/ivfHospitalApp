const AppointmentDB = require("../../../model/ConsultDoctorModel");

module.exports = (req, res) => {
  const id = req.params.id;

  AppointmentDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete Appointment Details` });
      } else {
        res.send({
          message: "Appointment Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Appointment Details" + err,
      });
    });
};
