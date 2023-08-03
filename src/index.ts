import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import database from "./services/database";

dotenv.config();
const port = parseInt(process.env.PORT!);
const origin = process.env.KNOWN_ORIGINS?.split(",");
const server = express();

server.use(cors({ origin }));
server.use(express.json());

database
  .$connect()
  .then(() => server.listen(port, () => console.log("server running")));
