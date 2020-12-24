import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ChatBot from './ChatBot';
import PageNotFound from './PageNotFound';
import SignUpPopup from './SignUpPopup';
import SignInPopup from './SignInPopup';
import UserProfile from './UserProfile';
import MenuMobile from './MenuMobile';
import HeaderNavBarBurger from './HeaderNavBarBurger';

function App() {
  const [isSignupPopupOpen, setIsSignupPopupOpen] = React.useState(false);
  const [isSigninPopupOpen, setIsSigninPopupOpen] = React.useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = React.useState(false);
  
  function handleOpenPopupSignup() {
    setIsSignupPopupOpen(true);
  }

  function handleOpenPopupSignin() {
    setIsSigninPopupOpen(true);
  }

  function handleOpenMenuMobile() {
    setIsMenuMobileOpen(true);
  }

  function closeAllPopups() {
    setIsSignupPopupOpen(false);
    setIsSigninPopupOpen(false);
    setIsMenuMobileOpen(false);
  }

  return (
    <>
      <div className="root root_chat">
        <div className="root__content">
            <Switch>
              <Route exact path="/">
                <Header
                onMenuMobile={handleOpenMenuMobile}
                />
                <Main
                onSignupPopup={handleOpenPopupSignup}
                onSigninPopup={handleOpenPopupSignin}
                />
              </Route>
              <Route path="/chat-bot">
                <ChatBot
                onMenuMobile={handleOpenMenuMobile}
                />
              </Route>
              <Route path="/profile">
                <UserProfile
                onMenuMobile={handleOpenMenuMobile}
                />
              </Route>
              <Route path="*">
                <PageNotFound
                onMenuMobile={handleOpenMenuMobile}
                />
              </Route>
            </Switch>
            <Footer />
            <SignUpPopup
            isOpen={isSignupPopupOpen}
            onClose={closeAllPopups}
            />
            <SignInPopup
            isOpen={isSigninPopupOpen}
            onClose={closeAllPopups}
            />
            <MenuMobile
            isOpen={isMenuMobileOpen}
            onClose={closeAllPopups}
            />
        </div> 
      </div>
    </>
  );
}

export default App;
