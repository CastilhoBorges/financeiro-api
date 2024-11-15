import { User } from "../models/user.js";
import { userQueryLogin } from "../queries/userQueryLogin.js";

export const userRepositoryCreate = async (user) => {
  return User.create(user);
};

export const userRepositoryLogin = async (email) => {
  return userQueryLogin(email);
};
