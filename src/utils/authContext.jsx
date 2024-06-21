import React, { createContext, useState} from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
  roles: [], // Add roles property
  setRoles: () => {}, // Add function to update roles
});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);

  // ... (functions to update state based on external login/logout logic)

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      setIsAuthenticated,
      user,
      setUser,
      roles,
      setRoles,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
