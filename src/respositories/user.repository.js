import { User } from "../models/user.js";
import Accounts from "../models/accounts.js";
import { queryLogin } from "../queries/queryLogin.js";
import { queryCreate } from "../queries/queryCreate.js";

export const userRepositoryCreate = async (user) => {
  const newUser = await queryCreate(User, user);
  await queryCreate(Accounts, { userId: newUser.userId });
  return newUser;
};

export const userRepositoryLogin = async (email) => {
  return queryLogin(User, email);
};
