import { User } from "../models/user.js";

export const createUserRepository = async (user) => {
  return User.create(user);
};
