const CategoryDB = require("../../../model/DiagnosticCategoryModel");

module.exports = (req, res) => {
  const id = req.params.id;

  CategoryDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete Category Details` });
      } else {
        res.send({
          message: "Category Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Category Details" + err,
      });
    });
};
