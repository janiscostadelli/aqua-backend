import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import { userRouter } from "./router/userRouter";
import { musicRouter } from "./router/musicRouter";
import { playlistRouter } from "./router/playlistRouter";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/music", musicRouter);
app.use("/playlist", playlistRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
