const DiagnoseDB = require("../../../model/DiagnoseProfileModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    DiagnoseDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Diagnose Details Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "error while retriving the Diagnose Details" });
      });
  } else {
    DiagnoseDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
