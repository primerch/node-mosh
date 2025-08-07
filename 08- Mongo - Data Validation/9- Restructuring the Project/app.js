require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("✅"))
  .catch((e) => console.log(e));

const express = require("express");
const { customersRouter } = require("./customers");
const app = express();
app.use(express.json());
app.use("/api/customers", customersRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is Listening on PORT: ${port}`);
});
