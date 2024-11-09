import bcrypt from "bcrypt";
import { createUserRepository } from "../respositories/user.repository.js";

export const createUserService = async (userData) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
  const user = { ...userData, password: hashedPassword };
  return createUserRepository(user);
};
