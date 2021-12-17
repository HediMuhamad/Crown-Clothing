import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component.jsx'
import HomePage from './pages/home-page/homepage.component.jsx'
import ShopPage from './pages/shop/shoppage.component.jsx'
import Account from './pages/account/account.component.jsx'
import {getAuth ,onAuthStateChanged, signOut} from 'firebase/auth'

class App extends React.Component {

  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = onAuthStateChanged(getAuth(), user=>this.setState({currentUser:user}))  
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth(); //in order to prevent memory leaking.
  }

  accountHandler = () => {
    if(this.state.currentUser){
      signOut(getAuth());
    }
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} accountHandler={this.accountHandler}/>
        <Route exact path={'/'} component={HomePage}/>
        <Route exact path={'/shop'} component={ShopPage} />
        <Route exact path={'/account'} component={Account} />
      </div>
    );
  }
}

export default App;
