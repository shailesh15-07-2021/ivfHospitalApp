const DiagnoseProductDB = require("../../../model/DiagnoseProductModel");

module.exports = (req, res) => {
  const id = req.params.id;

  DiagnoseProductDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete Diagnose Product Details` });
      } else {
        res.send({
          message: "Diagnose Product Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Diagnose Product Details" + err,
      });
    });
};
