import React from 'react';
import ThemeContext from '../contexts/ThemeContext';

const MainLayout = ({ children }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          minHeight: '10vh',
          padding: '1%',
          fontSize: 'calc(10px + 2vmin)'
        }}
      >
        {children}
      </div>
    )}
  </ThemeContext.Consumer>
);

export default MainLayout;
