import { User } from "../models/user.js";
import { Op } from "sequelize";

export async function verifyUserEmailExist(username, email) {
  return await User.findOne({
    where: {
      [Op.or]: [{ email }, { username }],
    },
  });
}
