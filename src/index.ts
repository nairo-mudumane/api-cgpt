import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const port = parseInt(process.env.PORT!);
const origin = process.env.KNOWN_ORIGINS?.split(",");
const server = express();

server.use(cors({ origin }));
server.use(express.json());

server.listen(port, () => console.log("server running"));
