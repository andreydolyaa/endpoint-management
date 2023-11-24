export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const generateUserForJwt = (user) => {
  return {
    name: user.name,
    id: user.id,
    email: user.email,
    role: user.role,
  };
};