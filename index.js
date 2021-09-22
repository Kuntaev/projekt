require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require('path');

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use(require("./routes/index"));
app.use("/public/uploads/img", express.static(path.resolve(__dirname, "image")));

mongoose
  .connect(process.env.MONGO_PORT)
  .then(() => {
    console.log("Подключено");
    app.listen(process.env.PORT);
  })
  .catch((e) => {
    console.log("ошибка при подключении " + e);
  });
