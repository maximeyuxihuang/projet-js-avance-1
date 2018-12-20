import React, { Component, lazy, Suspense } from 'react';
import Button from './components/Button';
import ThemeContext, { themes } from './contexts/ThemeContext';
import UserContext, { users } from './contexts/UserContext';
import MainLayout from './layouts/MainLayout';
import MainHeader from './layouts/MainHeader'
import ImageLoading from './components/ImageLoading'
const LoginForm = lazy(() => import('./components/LoginForm'));
const UserProfile = lazy(() => import('./components/UserProfile'));

class App extends Component {
  state = {
    theme: themes.dark,
    user: users.default,
    toggleTheme: this.toggleTheme
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    })
  }

  connect = (username, password) => {
    if (username && password) /* Check password */
    {
      this.setState({
        user: {
          username: username,
          isLoggedIn: true
        }
      })
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        <ThemeContext.Provider value={this.state}>

          <MainHeader>
            <Button
              onClick={this.toggleTheme}
            >
            Toggle theme
            </Button>
          </MainHeader>

          <MainLayout>
            <Suspense fallback={<ImageLoading/>}>
            {
              this.state.user.isLoggedIn
              ?
                <UserProfile/> 
              :
                <LoginForm onSubmit={this.connect}/>
            }
            </Suspense>
          </MainLayout>

        </ThemeContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
