import { jwtVerify } from "jose";
import { auth } from "../config/auth.js";
import dotenv from "dotenv";
import { User } from "../models/user.js";
import { queryPrimaryKey } from "../queries/queryPrimaryKey.js";

dotenv.config();

const privateKey = new TextEncoder().encode(process.env.JWT_SECRET);

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Token não fornecido" });
    }

    const { payload } = await jwtVerify(token, privateKey, {
      algorithms: [auth.algorithm],
    });

    const isUserId = await queryPrimaryKey(User, payload.id);

    if (!isUserId) {
      return res.status(403).json({ error: "Usuário não autorizado" });
    }

    req.user = [payload, "Usuario Autorizado"];
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido ou expirado" });
  }
};
