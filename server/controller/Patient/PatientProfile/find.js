const PatientDB = require("../../../model/PatientProfileModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    PatientDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Patient Details Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "error while retriving the Patient Details" });
      });
  } else {
    PatientDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
