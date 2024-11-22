import BankAccount from "../models/bankAccount.js";
import { queryCreate } from "../queries/queryCreate.js";

export const bankRepositoryCreate = async (newBankAccount) => {
  return queryCreate(BankAccount, newBankAccount);
};
