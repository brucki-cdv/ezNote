const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const notebookRouter = require("./routes/notebookRoute");
const noteRouter = require("./routes/noteRoute");
const userRouter = require("./routes/userRoute");
const tagRouter = require("./routes/tagRoute");

app.use(cors());

//PARSE REQ BODY
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

//REQ TIME MIDDLEWARE
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//ROUTES
app.use("/api/v1/notebook", notebookRouter);
app.use("/api/v1/note", noteRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/tag", tagRouter);

app.all("*", (req, res, next) => {
  next(`Can't find this path`);
});

module.exports = app;
