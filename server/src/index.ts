require("dotenv").config();

import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import authRouter from "./routers/authRouter";
import postRouter from "./routers/postRouter";
import { authorize } from "./utils/auth";

const port = process.env.API_PORT;
const uri = process.env.DB_URI;

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.use("/auth", authRouter);
app.use("/api", authorize);
app.use("/api/posts", postRouter);

app.listen(port, () =>
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: false
    })
    .then(() => console.log(`Listening on port ${port}`))
);
