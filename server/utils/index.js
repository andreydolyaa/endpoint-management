export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const generateUserForJwt = (user) => {
  return {
    name: user.name,
    id: user.id,
    email: user.email,
    role: user.role,
  };
};

export const praseJsonString = (jsonStr) => {
  try {
    return JSON.parse(jsonStr);
  } catch (error) {
    return "Failed to parse JSON";
  }
};
