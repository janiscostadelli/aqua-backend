import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import dotenv from "dotenv";
import { musicRouter } from "./router/musicRouter";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/user", musicRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
     console.error(`Failure upon starting server.`);
  }
});