require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3012",
  })
);
app.use(require("./routes/index"));

mongoose
.connect(process.env.MONGO_PORT)
.then(() => {
  console.log("Подключено");
  app.listen(process.env.PORT);
})
.catch((e) => {
  console.log("ошибка при подключении" + e);
});
