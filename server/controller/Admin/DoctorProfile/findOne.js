
const DoctorDB = require("../../../model/DoctorProfileModel");


module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    DoctorDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Doctor Details Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    DoctorDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
