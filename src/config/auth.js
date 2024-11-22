import dotenv from "dotenv";
import { SignJWT } from "jose";

dotenv.config();

const privateKey = new TextEncoder().encode(process.env.JWT_SECRET);

export const auth = {
  secret: privateKey,
  algorithm: "HS256",
  expiresIn: "2h",
};

export const newToken = (userId) => {
  return new SignJWT({ id: userId })
    .setProtectedHeader({
      alg: auth.algorithm,
    })
    .setExpirationTime(auth.expiresIn)
    .sign(auth.secret);
};
