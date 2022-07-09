import React, { useEffect, useState } from 'react';
import './App.css';

/*Dependencies */
import {Route, Routes } from 'react-router-dom';

/*Components */
import Header from './components/header/header.component.jsx'
import HomePage from './pages/home-page/home-page.component.jsx'
import ShopPage from './pages/shop/shop-page.component.jsx'
import AccountPage from './pages/account/account-page.component.jsx'
import ContactPage from './pages/contact/contact-page.component.jsx'
import CheckoutPageContainer from './pages/checkout/checkout-page.container.jsx';
import MenuList from './components/menu-list/menu-list.component.jsx'

import { useSelector, useDispatch } from 'react-redux';

/*Reducers Actions */
import { fetchDataFromFirestoreStart } from "./redux/shop-data/shop-data.actions"
import { getCurrentUserFromStartupStart } from "./redux/user/user.action"

/*Selectors */
import { selectMenuListShowing } from './redux/app/app.selector'

const App = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const showingMenuList = useSelector(selectMenuListShowing);
  const dispatch = useDispatch()


  useEffect(()=>{
     window.addEventListener("resize", screenSizeHandler); 
  },[])

  const screenSizeHandler = () => {
      setScreenWidth(window.innerWidth);
  }


  useEffect(()=>{
    dispatch(fetchDataFromFirestoreStart());
    dispatch(getCurrentUserFromStartupStart());
  },[dispatch]);



  return (
      <div className="App">
        <Header/>
        {
          (screenWidth <= 500 && showingMenuList) ? <MenuList/> :
          <Routes>
            <Route path={'/'}>
              <Route exact path={'/'} element={<HomePage/>}/>
              <Route path={'shop/*'} element={<ShopPage/>} />
              <Route exact path={'contact'} element={<ContactPage/>} />
              <Route exact path={'account'} element={<AccountPage/>} />
              <Route exact path={'checkout'} element={<CheckoutPageContainer/>} />
            </Route>
          </Routes>
        }</div>
  );
}

export default App;