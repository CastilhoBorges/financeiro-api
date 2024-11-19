import { jwtVerify } from "jose";
import { auth } from "../config/auth.js";
import dotenv from "dotenv";

dotenv.config();

const privateKey = new TextEncoder().encode(process.env.JWT_SECRET);

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const userId = req.body.userId;

    if (!token) {
      return res.status(401).json({ error: "Token não fornecido" });
    }

    const { payload } = await jwtVerify(token, privateKey, {
      algorithms: [auth.algorithm],
    });

    if (payload.id !== userId) {
      return res.status(403).json({ error: "Usuário não autorizado" });
    }

    req.user = payload;
    next(); 
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Token inválido ou expirado" });
  }
};
