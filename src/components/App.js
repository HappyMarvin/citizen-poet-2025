import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ChatBot from './ChatBot';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="root root_chat">
      <div className="root__content">
          <Switch>
            <Route exact path="/">
              <Header />
              <Main />
            </Route>
            <Route exact path="/chat-bot">
              <ChatBot />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
      </div> 
    </div>
  );
}

export default App;
