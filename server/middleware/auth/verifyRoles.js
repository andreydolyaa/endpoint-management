
// Tests if role from request allowed to access route
export const verifyRoles = (...roles) => {
  return async (req, res, next) => {
    if (!req.role || !roles.includes(parseInt(req.role))) {
      return res.sendStatus(401);
    }
    next();
  };
};
