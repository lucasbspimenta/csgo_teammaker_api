const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

// App Start
const app = express();
app.use(express.json());
app.use(cors());

// DB Start
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
requireDir("./src/models");

// Routes
app.use("/api", require("./src/routes"));

app.listen(3001);
