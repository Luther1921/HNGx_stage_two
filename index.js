const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const personRouter = require("./router/PersonRoutes");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", personRouter);

const Port = process.env.PORT || 3000;

connectDB();

app.listen(Port, () => {
  console.log(`Server is running on Port ${Port}`);
});
