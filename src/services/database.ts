import { PrismaClient } from "@prisma/client";
const db = new PrismaClient({ log: ["query", "info", "warn", "error"] });

const $connect = async (): Promise<void> => {
  try {
    console.log("connecting to database...");
    await db.$connect();
    console.log("connected to database");
  } catch (error) {
    console.log("failed to connect to database");
    console.error(error);
    process.exit(1);
  }
};

const database = { $connect, user: db.user };

export default database;
