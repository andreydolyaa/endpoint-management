const STORAGE_KEY = "EMR_SESSION";

export const storeSessionId = (sessionId) => {
  sessionStorage.setItem(STORAGE_KEY, sessionId);
};

export const getSessionId = () => {
  return sessionStorage.getItem(STORAGE_KEY);
};

export const removeSession = () => {
  sessionStorage.removeItem(STORAGE_KEY);
};

export const clearAllSessionStorage = () => {
  sessionStorage.clear();
};
