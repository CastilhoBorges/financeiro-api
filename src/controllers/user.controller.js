import { createUserService } from "../services/user.service.js";

export const createUserController = async (req, res) => {
  try {
    const user = await createUserService(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.json({ error: err.message});
  }
};
