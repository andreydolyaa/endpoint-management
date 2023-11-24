import { generateUserForJwt } from "../config/userRoles.js";
import { generateAccessToken } from "../middleware/auth/generateAccessToken.js";
import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";

export const handleRefreshToken = async (req, res, next) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(401);
  }

  const refreshToken = cookies.jwt;

  try {
    const user = await User.findOne({ refreshToken });
    if (!user) return res.sendStatus(403); // 403 Forbidden - (request understood, but refused)

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err || user.id !== decoded.id) return res.sendStatus(403);
        const userData = generateUserForJwt(user);
        const accessToken = generateAccessToken(userData);
        console.log(accessToken, "!!!!!!!");
        res.status(200).json({ accessToken });
      }
    );
  } catch (error) {
    res.sendStatus(401);
  }
};
