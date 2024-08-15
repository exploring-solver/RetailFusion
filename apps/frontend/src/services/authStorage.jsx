const KEY = 'authToken';

export const storeToken = async (token) => {
  try {
    await localStorage.setItem(KEY, token);
  } catch (error) {
    console.log('Error storing the auth token', error);
  }
};

export const getToken = async () => {
  try {
    return await localStorage.getItem(KEY);
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
};

export const removeToken = async () => {
  try {
    await localStorage.removeItem(KEY);
  } catch (error) {
    console.log('Error removing the auth token', error);
  }
};