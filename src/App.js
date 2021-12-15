import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/homepage.component.jsx'
import ShopPage from './pages/shop/shoppage.component.jsx'

function App() {
  return (
    <div className="App">
      {/* <Route exact path={'/'} component={HomePage}/> */}
      <Route exact path={'/'} component={ShopPage} />
    </div>
  );
}

export default App;
