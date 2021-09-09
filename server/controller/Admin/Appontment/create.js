const AppointmentDB = require("../../../model/ConsultDoctorModel");

// Load input validations
const validateAppointmentInput = require("../../../validation/ConsultDoctorvalidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateAppointmentInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const Appointment = AppointmentDB({
    patient: req.body.patient,
    doctor: req.body.doctor,
    purpose: req.body.purpose,
    medicalReports: req.body.medicalReports,
    paymentMethod: req.body.paymentMethod,
    paymentResult: req.body.paymentResult,
    fee: req.body.fee,
    isPaid: req.body.isPaid,
    paidAt: req.body.paidAt,
  });

  Appointment.save()
    .then((data) => {
      res.status(201).json({
        msg: "Appointment added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating Appointment",
      });
    });
};
