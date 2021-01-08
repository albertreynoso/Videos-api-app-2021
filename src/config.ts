import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_USER: process.env.USER || "admin",
  MONGO_PASSWORD: process.env.PASSWORD || "password",
  PORT: process.env.PORT || 3000,
};
