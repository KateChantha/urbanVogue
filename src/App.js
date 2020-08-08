import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.componenet';
import SignInSignUpPage from './pages/signin-signup-page/signin-signup.component'
// import { auth } from './firebase/firebase.utils';

import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/**
 * store state of user in App
 */
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  // set this method default to null
  unsubscribeFromAuth = null;

  // onAuthStateChanged() method get from firebase auth to get status of user-- subscriber 
  // firebase feature on persistence of user sesstion by sending that user authenticated object everytime until they sign out
  // we just want to always know when firebase has realized that the authentication has change whenever someone sign in and sign out without have to manually fecth from database.
  componentDidMount() {
    // this connection always open as long as app mouted on the DOM. so, no need to keep fecthing to check if user status has changed.
    // auth.onAuthStateChanged() returns fucntion store in unsubscribeFromAuth method/property
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.setState({ currentUser: user })
      // console.log(user)
      createUserProfileDocument(user);

    })
  }

  // beacuse it is an open subscrition, so we have to close subscriptions when this unmouted to avoid any memory leaks
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
