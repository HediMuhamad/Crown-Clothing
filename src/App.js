import React from 'react';

/*Dependencies */
import { Route } from 'react-router-dom';

/*Components */
import './App.css';
import Header from './components/header/header.component.jsx'
import HomePage from './pages/home-page/homepage.component.jsx'
import ShopPage from './pages/shop/shoppage.component.jsx'
import Account from './pages/account/account.component.jsx'

/*Firebase */
import { authChangeHandlingForwarder } from './firebase/authentication';
import { createUserProfileDocument, onSnapshotHandler } from './firebase/firestore';
import { connect } from 'react-redux';

/*Reducers Actions */
import { setCurrentUser } from './redux/user/user-action'

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
        <Route exact path={'/account'} component={Account} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})}

export default connect(null, mapDispatchToProps)(App);
