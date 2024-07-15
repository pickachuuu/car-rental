import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthTokenContext = createContext({
  token: null,
  updateToken: () => {},
  removeToken: () => {},
});

const AuthTokenProvider = ({ children }) => {

};

export  {AuthTokenContext, AuthTokenProvider};
