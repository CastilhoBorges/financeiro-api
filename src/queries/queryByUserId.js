export const queryByUserId = async (enty, data, atr) => {
  return enty.findOne({
    where: {
      userId: data,
    },
    attributes: [...atr],
  });
};
