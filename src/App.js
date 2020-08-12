import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.componenet';
import SignInSignUpPage from './pages/signin-signup-page/signin-signup.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';


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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if userAuth is exist/or sign-in
      if (userAuth) {
        // call createUserProfileDocument()-in firebase.utils, will first check it user exist 
        // then return userRef and assign to userRef here
        const userRef = await createUserProfileDocument(userAuth);

        // get back the first state of user's data and keep subscribe/ listen to userRef for any changes to that data 
        userRef.onSnapshot(snapShot => {
          // have to call with .data() to get all other properties that store in db
          this.setState({
            currentUser: {
              id: snapShot.id,
              // get the rest of other/deeper data by calling .data() on snapshot obj
              ...snapShot.data()
            }
          }, () => {
            // optional to check data
            console.log("this.state: ", this.state)
          });
        });
      } else {
        // if/whenever user sign-out, userAuth is null, set currentUser to vaule of userAuth which is null
        this.setState({ currentUser: userAuth })
      }
    });
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
