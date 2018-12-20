import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
import loadingImage from '../images/dale-waiting.gif'

const LoginForm = ({ onSubmit = () => {}, hidden }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div>
        <img src={ loadingImage } alt="Loading"/>
      </div>
    )}
  </ThemeContext.Consumer>
);

export default LoginForm;
