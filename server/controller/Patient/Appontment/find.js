const AppointmentDB = require("../../../model/ConsultDoctorModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    AppointmentDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Appointment Details Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "error while retriving the Appointment Details" });
      });
  } else {
    AppointmentDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
