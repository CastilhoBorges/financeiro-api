import { bankRepositoryCreate } from "../respositories/bank.repository.js";

export const bankServiceCreate = async (request) => {
  const accountId = request.params.accountId;
  const datas = request.body;
  const newBankAccount = { accountId, ...datas };

  return bankRepositoryCreate(newBankAccount);
};
