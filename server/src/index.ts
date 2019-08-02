require("dotenv").config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import authRouter from "./routers/authRouter";
import postRouter from "./routers/postRouter";
import { authorize } from "./utils/auth";

const port = process.env.PORT as string;
const connectionString = process.env.CONNECTION_STRING as string;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/auth", authRouter);
app.use("/api", authorize);
app.use("/api/posts", postRouter);

app.listen(port, () =>
  mongoose
    .connect(connectionString, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false
    })
    .then(() => console.log(`Listening on port ${port}`))
);
