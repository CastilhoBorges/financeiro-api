import bcrypt from "bcrypt";
import { createUserRepository } from "../respositories/user.repository.js";

export const createUserService = async (userData) => {
  const password = userData.password;

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = { ...userData, password: hashedPassword };

  try {
    return await createUserRepository(user);
  } catch (err) {
    if (err.errors[0].message === "username must be unique") {
      throw new Error("Usuario ja cadastrado");
    }

    if (err.errors[0].message === "email must be unique") {
      throw new Error("Email ja cadastrado");
    }
  }
};
