import React from 'react';

import './App.css';

/*Dependencies */
import { Redirect, Route } from 'react-router-dom';

/*Components */
import Header from './components/header/header.component.jsx'
import HomePage from './pages/home-page/home-page.component.jsx'
import ShopPage from './pages/shop/shop-page.component.jsx'
import AccountPage from './pages/account/account.component.jsx'
import CheckoutPage from './pages/checkout/checkout-page.component';

/*Firebase */
import { authChangeHandlingForwarder } from './firebase/authentication';
import { createUserProfileDocument, onSnapshotHandler } from './firebase/firestore';
import { connect } from 'react-redux';

/*Reducers Actions */
import { setCurrentUser } from './redux/user/user-action'

/*Selectors */
import { selectCurrentUser } from './redux/user/user-selectors'

class App extends React.Component {

  unSubscribeFromAuth = null;

  authChangeHandler = async (user) => {
    const { setCurrentUser } = this.props;
    setCurrentUser(user)
    if(user){
      const userRef = await createUserProfileDocument(user);
      onSnapshotHandler(userRef ,snapshot => setCurrentUser({id: userRef.id, ...snapshot.data()}))
    }
  }

  componentDidMount(){
    this.unSubscribeFromAuth = authChangeHandlingForwarder(this.authChangeHandler); //to provide unSubscribeFromAuth
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth(); //in order to prevent memory leaking.
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Route exact path={'/'} component={HomePage}/>
        <Route exact path={'/shop'} component={ShopPage} />
        <Route exact path={'/account'} render={()=> this.props.currentUser ? (<Redirect to={'/'}/>) : (<AccountPage/>) } />
        <Route exact path={'/checkout'} component={CheckoutPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
