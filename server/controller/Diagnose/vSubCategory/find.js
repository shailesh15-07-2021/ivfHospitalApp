const SubCategoryDB = require("../../../model/SubCategoryModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    SubCategoryDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `SubCategory Details may not Available`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "error while retriving the SubCategory Details",
        });
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
