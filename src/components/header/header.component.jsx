import React from 'react';

/* */
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOut } from '../../firebase/authentication';

/*Style and icons */
import './header.styles.scss'
import { ReactComponent as Logo } from '../../logo.svg'

/*Components */
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

/*Selectors */
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({currentUser, isCartDropdownHided}) => (
    <div className='header' >
        <div className='logo-container'><Link to='/' ><Logo/></Link></div>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            <Link className='option' to={!currentUser?'/account':''} onClick={authOut}> {currentUser?'SIGN OUT':'SIGN IN'}</Link>
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

export default connect(mapStateToProps)(Header);