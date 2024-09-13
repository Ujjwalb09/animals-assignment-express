const express = require("express");
const router = express.Router();
const { Animal } = require("../../db/db");

router.post("/add", async (req, res) => {
  const animalBody = req.body;

  const animal = await Animal.create(animalBody);

  res.status(200).json({
    message: "Animal added successfully",
    animal,
  });
});

router.get("/getall", async (req, res) => {
  const animals = await Animal.find();

  res.status(200).json({
    animals,
  });
});

router.put("/update", async (req, res) => {
  const { id } = req.query;
  const updateBody = req.body;

  const updatedAnimal = await Animal.findByIdAndUpdate(id, updateBody, {
    new: true,
    runValidators: true,
  });

  if (!updatedAnimal) {
    res.status(404).json({
      message: "Animal not found",
    });

    return;
  }

  res.status(200).json({
    message: "Animal updated successfully",
    Animal: updatedAnimal,
  });
});

router.delete("/delete", async (req, res) => {
  const { id } = req.query;

  const deleteAnimal = await Animal.findByIdAndDelete(id);

  if (!deleteAnimal) {
    res.status(404).json({
      message: "Animal not found",
    });

    return;
  }

  res.status(200).json({
    message: "Animal delete successfully",
  });
});

module.exports = router;
