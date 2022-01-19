import React, { useEffect } from 'react';
import './App.css';

/*Dependencies */
import { Redirect, Route } from 'react-router-dom';

/*Components */
import Header from './components/header/header.component.jsx'
import HomePage from './pages/home-page/home-page.component.jsx'
import ShopPage from './pages/shop/shop-page.component.jsx'
import AccountPage from './pages/account/account.component.jsx'
import CheckoutPageContainer from './pages/checkout/checkout-page.container';

import { useSelector, useDispatch } from 'react-redux';

/*Reducers Actions */
import { fetchDataFromFirestoreStart } from "./redux/shop-data/shop-data.actions"
import { getCurrentUserFromStartupStart } from "./redux/user/user.action"

/*Selectors */
import { selectCurrentUser } from './redux/user/user.selectors'


const App = () => {

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchDataFromFirestoreStart());
    dispatch(getCurrentUserFromStartupStart());
  },[dispatch]);

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

export default App;