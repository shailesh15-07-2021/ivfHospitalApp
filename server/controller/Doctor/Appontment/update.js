const AppointmentDB = require("../../../model/ConsultDoctorModel");

// Load input validations
const validateAppointmentInput = require("../../../validation/ConsultDoctorvalidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateAppointmentInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  AppointmentDB.findByIdAndUpdate(id, req.body, { upsert: true, new: true })
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({ message: "error whie finding Appointment Details" });
      } else {
        res.status(200).json({
          msg: "Appointment Details Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "error Appointment Details update information" });
    });
};
