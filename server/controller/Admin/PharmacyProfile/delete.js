const PharmacyProfileDB = require("../../../model/PharmacyProfileModel");

module.exports = (req, res) => {
  const id = req.params.id;

  PharmacyProfileDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete Pharmacy Profile Details` });
      } else {
        res.send({
          message: "Pharmacy Profile Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Pharmacy Profile Details" + err,
      });
    });
};
