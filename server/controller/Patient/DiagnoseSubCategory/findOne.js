const SubCategoryDB = require("../../../model/DiagnosticSubCategoryModel");

module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    SubCategoryDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `SubCategory Details Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    SubCategoryDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
