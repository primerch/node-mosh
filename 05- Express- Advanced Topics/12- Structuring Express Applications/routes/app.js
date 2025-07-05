const express = require("express");
const app = express();

const coursesRouter = require("./courses");

app.use(express.json());
app.use("/api/courses", coursesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on PORT: ${port}`));
