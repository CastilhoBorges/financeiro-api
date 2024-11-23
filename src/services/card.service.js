import { cardRepositoryCreate } from "../respositories/card.repository.js";

export const cardServiceCreate = async (request) => {
  const bankAccountId = request.params.bankAccountId;
  const cardData = request.body;
  const newCard = { bankAccountId, ...cardData };
  return await cardRepositoryCreate(newCard);
};
