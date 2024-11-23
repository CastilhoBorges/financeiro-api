import { cardServiceCreate } from "../services/card.service.js";

export const cardControllerCreate = async (req, res) => {
  const isCreateCard = await cardServiceCreate(req);
  res.json({ isCreateCard });
};
