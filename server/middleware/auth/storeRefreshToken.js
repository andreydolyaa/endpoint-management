import { User } from "../../model/userModel.js";

export const addRefreshTokenToUser = async (user, refreshToken) => {
  try {
    await User.findOneAndUpdate({ id: user.id }, { refreshToken });
  } catch (error) {
    throw new Error("Could not assign refresh token to user");
  }
};
