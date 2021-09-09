const CategoryDB = require("../../../model/DiagnosticCategoryModel");

module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    CategoryDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Category Details Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    CategoryDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
