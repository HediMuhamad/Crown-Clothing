import React from 'react';

import './App.css';

/*Dependencies */
import { Redirect, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

/*Higher Order Components */
import { connect } from 'react-redux';

/*Components */
import Header from './components/header/header.component.jsx'
import HomePage from './pages/home-page/home-page.component.jsx'
import ShopPage from './pages/shop/shop-page.component.jsx'
import AccountPage from './pages/account/account.component.jsx'
import CheckoutPageContainer from './pages/checkout/checkout-page.container';

/*Firebase */
import { authChangeHandlingForwarder } from './firebase/authentication';
import { onSnapshotHandler, getDocumentRef } from './firebase/firestore'; // <==

/*Reducers Actions */
import { setCurrentUser } from './redux/user/user.action';
import { fetchDataFromFirestoreStart } from "./redux/shop-data/shop-data.actions"

/*Selectors */
import { selectCurrentUser } from './redux/user/user.selectors'
import { selectIsCollectionsInFetching } from './redux/shop-data/shop-data.selector'



class App extends React.Component {

  unSubscribeFromAuth = null;

  authChangeHandler = async (user) => {
    const { setCurrentUser } = this.props;
    setCurrentUser(user)
    if(user){
      const userRef = getDocumentRef(`users/${user.uid}`);
      return onSnapshotHandler(userRef ,snapshot => setCurrentUser({id: userRef.id, ...snapshot.data()}))
    }
  }

  componentDidMount(){
    this.unSubscribeFromAuth = authChangeHandlingForwarder(this.authChangeHandler); //to provide unSubscribeFromAuth
    const { fetchDataFromFirestoreStart } = this.props;
    fetchDataFromFirestoreStart();
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth(); //in order to prevent memory leaking.
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Route exact path={'/'} component={HomePage}/>
        <Route path={'/shop'} component={ShopPage} />
        <Route exact path={'/account'} render={() => this.props.currentUser ? (<Redirect to={'/'}/>) : (<AccountPage/>) } />
        <Route exact path={'/checkout'} component={CheckoutPageContainer} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCollectionsInFetching: selectIsCollectionsInFetching 
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    fetchDataFromFirestoreStart: () => dispatch(fetchDataFromFirestoreStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
