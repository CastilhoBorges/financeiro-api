import { accountServiceData } from "../services/account.service.js";

export const accountControllerData = async (req, res) => {
  const userId = req.user[0].id;
  
  try {
    const data = await accountServiceData(userId);
    console.log(res);
    res.json({ data });
  } catch (err) {
    res.send(err);
  }
};
