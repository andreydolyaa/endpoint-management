export const userRoles = {
  ADMIN: 676767,
  USER: 112233,
};

export const generateUserForJwt = (user) => {
  return {
    name: user.name,
    id: user.id,
    email: user.email,
    role: user.role,
  };
};
