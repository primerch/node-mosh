require("dotenv").config();
const express = require("express");
const { router } = require("./genres");

const app = express();
app.use(express.json());
app.use("/api/genres", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
