import bcrypt from "bcrypt";
import { createUserRepository } from "../respositories/user.repository.js";
import { verifyUserEmailExist } from "../queries/verifyUserNameExist.js";

export const createUserService = async (userData) => {
  const { username, password, email } = userData;

  const verifyEmailUsername = verifyUserEmailExist(username, email);

  if (verifyEmailUsername) {
    if (
      verifyEmailUsername.email === email &&
      verifyEmailUsername.username === username
    ) {
      throw new Error("Usuario ou Email ja existem!");
    }

    if (verifyEmailUsername.email === email) {
      throw new Error("Este email ja existe!");
    }

    if (verifyEmailUsername.username === username) {
      throw new Error("Este Username ja existe!");
    }
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = { username: username, email: email, password: hashedPassword };
  return createUserRepository(user);
};
