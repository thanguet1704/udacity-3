import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: "postgres",
  password: "thang12345",
  database: "udacity",
  host: "database-1.cdyoqgcb8j3p.us-east-1.rds.amazonaws.com",

  dialect: config.dialect,
  storage: ":memory:",
});
