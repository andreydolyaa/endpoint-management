const STORAGE_KEY = "vvv-vvv";

export const saveToStorage = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadFromStorage = () => {
  return localStorage.getItem(STORAGE_KEY);
};

export const removeFromStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
};
