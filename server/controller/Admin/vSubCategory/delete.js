const SubCategoryDB = require("../../../model/SubCategoryModel");

module.exports = (req, res) => {
  const id = req.params.id;

  SubCategoryDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete SubCategory Details` });
      } else {
        res.send({
          message: "SubCategory Details deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete SubCategory Details" + err,
      });
    });
};
