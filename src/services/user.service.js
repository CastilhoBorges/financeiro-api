import bcrypt from "bcrypt";
import { userRepositoryCreate } from "../respositories/user.repository.js";
import { userRepositoryLogin } from "../respositories/user.repository.js";

export const userServiceCreate = async (userData) => {
  const password = userData.password;

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = { ...userData, password: hashedPassword };

  try {
    return await userRepositoryCreate(user);
  } catch (err) {
    if (err.errors[0].message === "username must be unique") {
      throw new Error("Usuario ja cadastrado");
    }

    if (err.errors[0].message === "email must be unique") {
      throw new Error("Email ja cadastrado");
    }
  }
};

export const userServiceLogin = async (userData) => {
  const { email, password } = userData;
  
};
