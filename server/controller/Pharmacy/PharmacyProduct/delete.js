const PharmacyProductDB = require("../../../model/PharmacyProducts");

module.exports = (req, res) => {
  const id = req.params.id;

  PharmacyProductDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete Pharmacy Product Details` });
      } else {
        res.send({
          message: "Pharmacy Product Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Pharmacy Product Details" + err,
      });
    });
};
