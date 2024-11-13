import { User } from "../models/user.js";

export const userRepositoryCreate = async (user) => {
  return User.create(user);
};

export const userRepositoryLogin = async () => {
  
};
