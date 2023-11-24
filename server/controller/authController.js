import { generateAccessToken } from "../middleware/auth/generateAccessToken.js";
import { generateRefreshToken } from "../middleware/auth/generateRefreshToken.js";
import { addRefreshTokenToUser } from "../middleware/auth/storeRefreshToken.js";
import { userRoles } from "../config/userRoles.js";
import { generateUserForJwt } from "../utils/index.js";
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
    role: userRoles.USER, // TODO: Temporary every new user sets to USER
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
        const userData = generateUserForJwt(user);
        const accessToken = generateAccessToken(userData); // Should be stored in memory!
        const refreshToken = generateRefreshToken(user.id);
        await addRefreshTokenToUser(user, refreshToken);
        res.cookie("jwt", refreshToken, {
          httpOnly: true,
          sameSite: "None",
          secure: true,
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

export const handleSignOut = async (req, res, next) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  const refreshToken = cookies.jwt;
  try {
    const user = await User.findOne({ refreshToken });

    if (!user) {
      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
        secure: true,
      });
      return res.sendStatus(204);
    }

    await User.findOneAndUpdate({ refreshToken }, { refreshToken: "" });

    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    res.status(204).json({ message: "Signed out successfully" });
  } catch (error) {
    res.sendStatus(400);
  }
};
