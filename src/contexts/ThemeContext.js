import React from 'react';

export const themes = {
  light: {
    backgroundColor: '#FFFFE0',
    contrastColor: '#333',
    textColor: 'black',
    linkColor: '#53C6FF'
  },
  dark: {
    backgroundColor: '#282c34',
    contrastColor: '#333',
    textColor: 'white',
    linkColor: '#53C6FF'
  }
};

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});

export default ThemeContext;
