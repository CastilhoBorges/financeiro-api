import { jwtVerify } from "jose";
import { auth } from "../config/auth.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) res.status(401).json({ message: "Token não fornecido" });

  try {
    const secret = new TextEncoder().encode(auth.secret);
    const { payload } = await jwtVerify(token, secret);

    req.userId = payload.id;
    next();
  } catch (err) {
    return res.status(403).json({ mensagem: "Token inválido ou expirado" });
  }
};
