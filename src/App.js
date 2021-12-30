import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component.jsx'
import HomePage from './pages/home-page/homepage.component.jsx'
import ShopPage from './pages/shop/shoppage.component.jsx'
import Account from './pages/account/account.component.jsx'
import { authChangeHandlingForwarder } from './firebase/authentication';
import { createUserProfileDocument, onSnapshotHandler } from './firebase/firestore';

class App extends React.Component {

  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  authChangeHandler = async (user) => {
    this.setState({currentUser:user})
    if(user){
      const userRef = await createUserProfileDocument(user);
      onSnapshotHandler(userRef ,snapshot => this.setState({currentUser:{id: userRef.id, ...snapshot.data()}}))
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
        <Header currentUser={this.state.currentUser} accountHandler={this.accountHandler}/>
        <Route exact path={'/'} component={HomePage}/>
        <Route exact path={'/shop'} component={ShopPage} />
        <Route exact path={'/account'} component={Account} />
      </div>
    );
  }
}

export default App;
