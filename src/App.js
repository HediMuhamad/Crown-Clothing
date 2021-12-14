import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/homepage.component.jsx'

function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={HomePage} />
    </div>
  );
}

export default App;
