const DiagnoseProductDB = require("../../../model/DiagnoseProductModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    DiagnoseProductDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Diagnose Product Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "error while retriving the Diagnose Product Details",
        });
      });
  } else {
    DiagnoseProductDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
