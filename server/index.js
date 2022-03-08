import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import allRouter from "./routes/allRoutes.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", allRouter);
app.use("/user", userRouter);

const CONNECTION_URL =
  "mongodb://notecafe:Note12345@cluster0-shard-00-00.7hn6p.mongodb.net:27017,cluster0-shard-00-01.7hn6p.mongodb.net:27017,cluster0-shard-00-02.7hn6p.mongodb.net:27017/noteCafe?ssl=true&replicaSet=atlas-112ezu-shard-0&authSource=admin&retryWrites=true&w=majority";
// "mongodb+srv://notecafe:Note12345@cluster0.7hn6p.mongodb.net/noteCafe";
const PORT = 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
