const express = require("express");
const router = express.Router();

router.use("/authentication", require("./Auth"));

router.use("/diagnose-category", require("./DiagnoseCategoryRoute"));

router.use("/diagnose-sub-category", require("./DiagnoseSubCategoryRoute"));

router.use("/diagnose-profile", require("./DiagnoseProfileRoute"));

router.use("/diagnose-products", require("./DiagnoseProductRoute"));

router.use("/doctor-profile", require("./DoctorProfileRoute"));

router.use("/doctor-specelization", require("./DoctorSpecelizationRoute"));

router.use("/patient-profile", require("./PatientProfileRoute"));

router.use("/patient-past-prescription", require("./PastPrescription"));

router.use("/prescription", require("./PrescriptionRoute"));

router.use("/pharmacy-profile", require("./PharmacyProfileRoute"));

router.use("/pharmacy-product", require("./PharmacyProductRoute"));

router.use("/video-category", require("./VideoCategoryRoute"));

router.use("/video-channel", require("./VideoChannelRoute"));

router.use("/video-sub-category", require("./VideoSubCategoryRoute"));

router.use("/video-upload", require("./VideoUploadRoute"));

module.exports = router;
