import { User } from "../models/user.js";

export const userQueryLogin = async (email) => {
  return User.findOne({
    where: {
      email: email,
    },
    attributes: ["userId", "email", "password"],
  });
};
