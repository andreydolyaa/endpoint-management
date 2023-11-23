import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
  const options = {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRATION_TIME,
  };
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, options);
};
