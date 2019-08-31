require("dotenv").config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import { authorize } from "./utils/auth";
import authRouter from "./routers/authRouter";
import meRouter from "./routers/meRouter";
import postRouter from "./routers/postRouter";
import userRouter from "./routers/userRouter";

const port = process.env.PORT as string;
const connectionString = process.env.CONNECTION_STRING as string;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/auth", authRouter);
app.use("/api", authorize);
app.use("/api/me", meRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);

app.listen(port, () =>
  mongoose
    .connect(connectionString, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false
    })
    .then(() => console.log(`Listening on port ${port}`))
);
