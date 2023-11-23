import { generateAccessToken } from "../middleware/auth/generateAccessToken.js";
import { generateRefreshToken } from "../middleware/auth/generateRefreshToken.js";
import { addRefreshTokenToUser } from "../middleware/auth/storeRefreshToken.js";
import { User } from "../model/userModel.js";
import bcrypt from "bcrypt";

const COOKIE_MAX_AGE = 7 * 24 * 60 * 60 * 1000;

export const handleSignUp = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to create user", error });
  }
};

export const handleSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User does not exists");
    } else {
      const validated = await bcrypt.compare(password, user.password);
      if (validated) {
        const userData = { name: user.name, id: user.id, email: user.email };
        const accessToken = generateAccessToken(userData);
        const refreshToken = generateRefreshToken(user.id);
        await addRefreshTokenToUser(user, refreshToken);
        res.cookie("jwt", refreshToken, {
          httpOnly: true,
          maxAge: COOKIE_MAX_AGE,
        });
        return res.status(200).json({ accessToken });
      } else {
        throw new Error("Wrong credentials");
      }
    }
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
};
