import { accountServiceAccountId } from "../services/account.service.js";

export const accountControllerAccountId = async (req, res) => {
  const userId = req.user[0].id;
  
  try {
    const accountId = await accountServiceAccountId(userId);
    res.json(accountId);
  } catch (err) {
    res.send(err);
  }
};
