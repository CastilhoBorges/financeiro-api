export const accounts = async (req, res) => {
  res.send(req.user);
};
