import * as SecureStore from "expo-secure-store";

export const storeUserData = async (userData) => {
  try {
    const jsonValue = JSON.stringify(userData.data.token);
    await SecureStore.setItemAsync("userData", jsonValue);
  } catch (error) {
    console.error("Failed to store user data:", error);
  }
};

export const retrieveUserData = async () => {
  try {
    const jsonValue = await SecureStore.getItemAsync("userData");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error("Failed to retrieve user data:", error);
    return null;
  }
};

export const removeUserData = async () => {
  try {
    await SecureStore.deleteItemAsync("userData");
  } catch (error) {
    console.error("Failed to remove user data:", error);
  }
};
