const PharmacyProfileDB = require("../../../model/PharmacyProfileModel");

module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    PharmacyProfileDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Pharmacy Profile Details Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    PharmacyProfileDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
