import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/*Style and icons */
import './header.styles.scss'
import { ReactComponent as Logo } from '../../logo.svg'

/*Components */
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

/*Selectors */
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

/*Actions */
import { signOutStart } from '../../redux/user/user.action'

const Header = ({currentUser, isCartDropdownHided, signOut}) => (
    <div className='header' >
        <div className='logo-container'><Link to='/' ><Logo/></Link></div>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            <Link className='option' to={!currentUser?'/account':''} onClick={currentUser ? signOut : null}> {currentUser?'SIGN OUT':'SIGN IN'}</Link>
            <CartIcon/>
            {
                isCartDropdownHided ? null :
                <CartDropdown/>
            }
        </div>
    </div>
    )

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    isCartDropdownHided: selectCartHidden(state),
})

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);