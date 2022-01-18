import React, { useEffect } from 'react';

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

/*Reducers Actions */
import { fetchDataFromFirestoreStart } from "./redux/shop-data/shop-data.actions"
import { getCurrentUserFromStartupStart } from "./redux/user/user.action"

/*Selectors */
import { selectCurrentUser } from './redux/user/user.selectors'
import { selectIsCollectionsInFetching } from './redux/shop-data/shop-data.selector'


const App = ({ fetchDataFromFirestoreStart, getCurrentUserFromStartupStart, currentUser }) => {

  useEffect(()=>{
    getCurrentUserFromStartupStart();
    fetchDataFromFirestoreStart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="App">
      <Header/>
      <Route exact path={'/'} component={HomePage}/>
      <Route path={'/shop'} component={ShopPage} />
      <Route exact path={'/account'} render={() => currentUser ? (<Redirect to={'/'}/>) : (<AccountPage/>) } />
      <Route exact path={'/checkout'} component={CheckoutPageContainer} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCollectionsInFetching: selectIsCollectionsInFetching
})

const mapDispatchToProps = dispatch => ({
  fetchDataFromFirestoreStart: () => dispatch(fetchDataFromFirestoreStart()),
  getCurrentUserFromStartupStart: () => dispatch(getCurrentUserFromStartupStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);