const express = require("express");
const app = express();
const port = 3000;
const mainRouter = require("./routes/main");

app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
