export const queryLogin = async (enty, email) => {
  return enty.findOne({
    where: {
      email: email,
    },
    attributes: ["userId", "password"],
  });
};
