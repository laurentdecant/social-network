import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import userRouter from "./routers/userRouter";

const port = 3001;
const uri = "mongodb://localhost:27017/social-network";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use("/users", userRouter);

app.listen(port, () =>
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: false
    })
    .then(() => console.log(`Listening on port ${port}`))
);
