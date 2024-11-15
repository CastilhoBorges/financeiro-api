import { userServiceCreate } from "../services/user.service.js";
import { userServiceLogin } from "../services/user.service.js";

export const userControllerCreate = async (req, res) => {
  try {
    const user = await userServiceCreate(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.json({ error: err.message });
  }
};

export const userControllerLogin = async (req, res) => {
  try {
    const login = await userServiceLogin(req.body);
    res.send(login);
  } catch (err) {
    res.json({ error: err.message });
  }
};
