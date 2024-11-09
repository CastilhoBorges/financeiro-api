import { ROUTER } from "../utils/router.constants.js";
import { User } from "../models/user.js";

const registerUser = ROUTER;

registerUser.post("/", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const newUser = await User.create({ username, password, email });
    res
      .status(201)
      .json({ message: "Usuario registrado com sucesso!", user: newUser });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
});

export { registerUser };
