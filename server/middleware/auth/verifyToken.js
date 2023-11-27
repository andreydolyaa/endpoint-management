import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const token = req.headers?.authorization?.replace("Bearer ", "");

  if (!token)
    return res
      .status(401)
      .json({ message: "Unauthorized - No token provided" });

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) throw new Error();
      req.role = decoded.role;
    });
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};
