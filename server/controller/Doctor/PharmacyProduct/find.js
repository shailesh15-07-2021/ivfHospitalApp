const PharmacyProductDB = require("../../../model/PharmacyProducts");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    PharmacyProductDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Pharmacy Product Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "error while retriving the Pharmacy Product Details",
        });
      });
  } else {
    PharmacyProductDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
