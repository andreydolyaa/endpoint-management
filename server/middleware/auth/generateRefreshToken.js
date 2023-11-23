import jwt from "jsonwebtoken";

export const generateRefreshToken = (id) => {
  const options = {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRATION_TIME,
  };
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, options);
};
