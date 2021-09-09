const CategoryDB = require("../../../model/DiagnosticCategoryModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    CategoryDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Category Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "error while retriving the Category Details",
        });
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
