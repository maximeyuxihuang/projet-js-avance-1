import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
import Button from './Button';

const LoginForm = ({ onSubmit = () => {}, hidden }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div>
        <div>
          <label for="username" style={{ color: theme.textColor }}>
            username
          </label>
          <input name="username" id="username" />
        </div>

        <div>
          <label for="password" style={{ color: theme.textColor }}>
            password
          </label>
          <input name="password" id="password" />
        </div>

        <Button
          backgroundColor={theme.linkColor}
          textColor={theme.backgroundColor}
          onClick={() => {
              onSubmit(document.getElementById('username').value, document.getElementById('password').value)
          }}
        >
          login
        </Button>
      </div>
    )}
  </ThemeContext.Consumer>
);

export default LoginForm;
