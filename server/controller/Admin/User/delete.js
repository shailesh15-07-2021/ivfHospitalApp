const PharmacyDB = require("../../../model/UserModel");

module.exports = (req, res) => {
  const id = req.params.id;

  PharmacyDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete Pharmacy Details` });
      } else {
        res.send({
          message: "Pharmacy Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Pharmacy Details" + err,
      });
    });
};
