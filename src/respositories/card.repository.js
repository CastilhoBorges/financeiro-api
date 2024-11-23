import Card from "../models/card.js";
import { queryCreate } from "../queries/queryCreate.js";

export const cardRepositoryCreate = async (datas) => {
  return await queryCreate(Card, datas);
};
