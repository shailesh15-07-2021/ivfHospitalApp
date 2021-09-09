const PharmacyProfileDB = require("../../../model/PharmacyProfileModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
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
        res
          .status(500)
          .send({
            message: "error while retriving the Pharmacy Profile Details",
          });
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
