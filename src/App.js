import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/homepage.component.jsx'
import ShopPage from './pages/shop/shoppage.component.jsx'
import Header from './components/header/header.component.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path={'/'} component={HomePage}/>
      <Route exact path={'/shop'} component={ShopPage} />
    </div>
  );
}

export default App;
