import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthTokenContext = createContext({
  token: null,
  updateToken: () => {},
  removeToken: () => {},
});

const AuthTokenProvider = ({ children }) => {
  // Implement logic to manage context values (e.g., fetch token)
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = Cookies.get('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const updateToken = (newToken) => {
    setToken(newToken);
    Cookies.set('authToken', newToken, { expires: 1 });
  };

  const removeToken = () => {
    Cookies.remove('authToken');
    setToken(null);
  };

  const value = { token, updateToken, removeToken };

  return (
    <AuthTokenContext.Provider value={value}>
      {children}
    </AuthTokenContext.Provider>
  );
};  

export  {AuthTokenContext, AuthTokenProvider};
