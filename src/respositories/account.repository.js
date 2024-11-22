import Accounts from "../models/accounts.js";
import { queryByUserId } from "../queries/queryByUserId.js";

export const accountRepositoryAccountId = async (userId, attributes) => {
  return await queryByUserId(Accounts, userId, attributes);
};
