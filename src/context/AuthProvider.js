import React, { useEffect, useState } from "react";
import {
  removeUserData,
  retrieveUserData,
  storeUserData,
} from "../utils/SecureStorage";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial user state is null or empty object

  const login = (userData) => {
    // Perform login logic and set the authenticated user
    setUser(userData);
    storeUserData(userData);
  };

  const logout = () => {
    // Perform logout logic and clear the authenticated user
    setUser(null);
    removeUserData();
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUserData = await retrieveUserData(); // Retrieve the user data from SecureStorage
      if (storedUserData) {
        setUser(storedUserData);
      }
    };

    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
