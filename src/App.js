import React from 'react';

import './App.css';

/*Dependencies */
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

/*Components */
import Header from './components/header/header.component.jsx'
import HomePage from './pages/home-page/home-page.component.jsx'
import ShopPage from './pages/shop/shop-page.component.jsx'
import AccountPage from './pages/account/account.component.jsx'
import CheckoutPage from './pages/checkout/checkout-page.component';

/*Firebase */
import { authChangeHandlingForwarder } from './firebase/authentication';
import { createUserProfileDocument, onSnapshotHandler, getCollectionRef } from './firebase/firestore';

/*Reducers Actions */
import { setCurrentUser } from './redux/user/user.action'

/*Selectors */
import { selectCurrentUser } from './redux/user/user.selectors'

/*Actions */
import { parseToShopData } from './redux/shop-data/shop-data.actions';

class App extends React.Component {

  unSubscribeFromAuth = null;

  authChangeHandler = async (user) => {
    const { setCurrentUser } = this.props;
    setCurrentUser(user)
    if(user){
      const userRef = await createUserProfileDocument(user);
      return onSnapshotHandler(userRef ,snapshot => setCurrentUser({id: userRef.id, ...snapshot.data()}))
    }
  }

  unSubscribeFromServerData

  retreiveDataFromServer = async () => {
    return onSnapshotHandler(getCollectionRef('shopData'), async snapshot => {
      const { parseToShopData } = this.props;
      const docsArray = snapshot.docs.map(doc=>doc.data());
      parseToShopData(docsArray)
    })
  }

  componentDidMount(){
    this.unSubscribeFromAuth = authChangeHandlingForwarder(this.authChangeHandler); //to provide unSubscribeFromAuth
    this.unSubscribeFromServerData = this.retreiveDataFromServer()
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth(); //in order to prevent memory leaking.
    this.unSubscribeFromServerData();
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Route exact path={'/'} component={HomePage}/>
        <Route path={'/shop'} component={ShopPage} />
        <Route exact path={'/account'} render={()=> this.props.currentUser ? (<Redirect to={'/'}/>) : (<AccountPage/>) } />
        <Route exact path={'/checkout'} component={CheckoutPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    parseToShopData: docsArray => dispatch(parseToShopData(docsArray)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
