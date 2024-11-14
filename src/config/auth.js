import dotenv from "dotenv";

dotenv.config();

export const auth = {
  secret: process.env.JWT_SECRET,
  expiresIn: "1h",
};
