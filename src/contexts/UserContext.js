import React from 'react';

export const users = {
  default: {
    username: undefined,
    isLoggedIn: false
  }
};

const ThemeContext = React.createContext({
  user: users.default
});

export default ThemeContext;
