require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const connectDB = require("./config/connectDB");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

connectDB();

app.use("/admin", require("./routes/Admin/index"));
app.use("/diagnose", require("./routes/Diagnose/index"));
app.use("/doctor", require("./routes/Doctor/index"));
app.use("/education", require("./routes/Educational /index"));
app.use("/patient", require("./routes/Patient/index"));
app.use("/pharmacy", require("./routes/Pharmacy/index"));

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
