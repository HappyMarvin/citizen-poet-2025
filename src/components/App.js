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

function App() {
  const [isSignupPopupOpen, setIsSignupPopupOpen] = React.useState(false);
  const [isSigninPopupOpen, setIsSigninPopupOpen] = React.useState(false);
  
  function handleOpenPopupSignup() {
    setIsSignupPopupOpen(true);
  }

  function handleOpenPopupSignin() {
    setIsSigninPopupOpen(true);
  }

  function closeAllPopups() {
    setIsSignupPopupOpen(false);
    setIsSigninPopupOpen(false);
  }

  return (
    <>
      <div className="root root_chat">
        <div className="root__content">
            <Switch>
              <Route exact path="/">
                <Header />
                <Main
                onSignupPopup={handleOpenPopupSignup}
                onSigninPopup={handleOpenPopupSignin}
                />
              </Route>
              <Route path="/chat-bot">
                <ChatBot />
              </Route>
              <Route path="/profile">
                <UserProfile />
              </Route>
              <Route path="*">
                <PageNotFound />
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
        </div> 
      </div>
    </>
  );
}

export default App;
