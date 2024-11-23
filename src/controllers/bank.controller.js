import { bankServiceCreate } from "../services/bank.service.js";

export const bankControllerCreate = async (req, res) => {
  try {
    const request = req;
    const isCreate = await bankServiceCreate(request);
    res.json(isCreate.bankAccountId);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
