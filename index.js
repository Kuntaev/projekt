require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(require("./routes/index"));
app.use("/public", express.static(path.resolve(__dirname, "/client/public")));
console.log(process.env.MONGO_PORT, process.env.PORT)

app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "public", "index.html"))
})

mongoose
  .connect(process.env.MONGO_PORT)
  .then(() => {
    console.log("Подключено");
    app.listen(process.env.PORT);
  })
  .catch((e) => {
    console.log("ошибка при подключении " + e);
  });
