import { accountRepositoryAccountId } from "../respositories/account.repository.js";

export const accountServiceAccountId = async (userId) => {
  return await accountRepositoryAccountId(userId, ["accountId"]);
};
