import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ChatBot from './ChatBot';
import PageNotFound from './PageNotFound';
import SignUpPopup from './SignUpPopup';
import SignInPopup from './SignInPopup';
import UpdateUserPopup from './UpdateUserPopup';
import UserProfile from './UserProfile';
import MenuMobile from './MenuMobile';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [isSignupPopupOpen, setIsSignupPopupOpen] = React.useState(false);
  const [isSigninPopupOpen, setIsSigninPopupOpen] = React.useState(false);
  const [isUpdateUserPopupOpen, setIsUpdateUserPopupOpen] = React.useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = React.useState(false);
  const [requests, setRequests] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  
  function handleOpenPopupSignup() {
    setIsSignupPopupOpen(true);
  }

  function handleOpenPopupSignin() {
    setIsSigninPopupOpen(true);
  }

  function handleOpenPopupUpdateUser() {
    setIsUpdateUserPopupOpen(true);
  }

  function handleOpenMenuMobile() {
    setIsMenuMobileOpen(true);
  }

  function closeAllPopups() {
    setIsSignupPopupOpen(false);
    setIsSigninPopupOpen(false);
    setIsMenuMobileOpen(false);
    setIsUpdateUserPopupOpen(false);
  }

  function handleUpdateUser(newUserInfo) {
    api.updateUser(newUserInfo)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUserRequestSubmit(requestInfo) {
    api.createRequest(requestInfo)
      .then((newRequest) => {
        setRequests([newRequest, ...requests]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRequestDelete(request) {
    api.deleteRequest(request._id)
      .then(() => {
        const newRequests = request.filter((r) => request._id !== r._id);
        setRequests(newRequests);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getRequests()])
      .then(([user, requests]) => {
        setCurrentUser(user);
        setRequests(requests);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
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
                  onSendRequestText={handleUserRequestSubmit}
                  />
                </Route>
                <Route path="/profile">
                  <UserProfile
                  onMenuMobile={handleOpenMenuMobile}
                  onRequestDelete={handleRequestDelete}
                  onUpdateUserPopup={handleOpenPopupUpdateUser}
                  requests={requests}
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
              <UpdateUserPopup
              isOpen={isUpdateUserPopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
              />
              <MenuMobile
              isOpen={isMenuMobileOpen}
              onClose={closeAllPopups}
              />
          </div> 
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
