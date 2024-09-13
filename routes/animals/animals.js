const express = require("express");
const router = express.Router();
const Animal = require("../../db/db");

router.post("/add", (req, res) => {
  const animal = req.body.animal;
});

module.exports = router;
