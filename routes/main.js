const express = require("express");
const router = express.Router();
const animalsRouter = require("./animals/animals");

router.use("/animals", animalsRouter);

module.exports = router;
