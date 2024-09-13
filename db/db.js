const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://ujjwalbhatt09:Bhatt_2021@cluster0.e1a378i.mongodb.net/animals-assignment";

mongoose
  .connect(dbURI, {})
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

const AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  habitat: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Animal = mongoose.model("animals", AnimalSchema);

module.exports = {
  Animal,
};
