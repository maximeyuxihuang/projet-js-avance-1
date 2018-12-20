import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';

const UserProfile = () => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <UserContext.Consumer>
        {({ user }) => (
          <div>
            <label style={{ color: theme.textColor, marginRight: '10%' }}>Username:</label>
            <text style={{ color: theme.textColor }}>{user.isLoggedIn ? user.username: 'Not connected'}</text>
          </div>
        )}
      </UserContext.Consumer>
    )}
  </ThemeContext.Consumer>
);

export default UserProfile;
