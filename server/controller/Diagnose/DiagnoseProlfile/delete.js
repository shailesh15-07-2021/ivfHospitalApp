const DiagnoseDB = require("../../../model/DiagnoseProfileModel");

module.exports = (req, res) => {
  const id = req.params.id;

  DiagnoseDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete Diagnose Details` });
      } else {
        res.send({
          message: "Diagnose Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Diagnose Details" + err,
      });
    });
};
