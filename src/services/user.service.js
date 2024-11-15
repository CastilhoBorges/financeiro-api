import bcrypt from "bcrypt";
import { userRepositoryCreate } from "../respositories/user.repository.js";
import { userRepositoryLogin } from "../respositories/user.repository.js";
import { newToken } from "../config/auth.js";

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

export const userServiceLogin = async (login) => {
  const { email, password } = login;

  try {
    const data = await userRepositoryLogin(email);
    const userData = data.dataValues;
    const isPassword = await bcrypt.compare(password, userData.password);

    if (isPassword) {
      const token = await newToken(userData.id);
      return { token };
    } else {
      throw new Error("Senha invalida");
    }
  } catch (err) {
    if (err.message.startsWith("Cannot read properties of null")) {
      throw new Error("Email não cadastrado");
    }

    throw new Error(err.message);
  }
};
