const PatientDB = require("../../../model/PatientProfileModel");

module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
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
        res.status(500).send({ message: "error while retriving the data" });
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
