const DoctorSpecelizationDB = require("../../../model/DoctorSpecelizationModel");

module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    DoctorSpecelizationDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Doctor Specelization Details Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    DoctorSpecelizationDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
