import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

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

const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartDropdownHided = useSelector(selectCartHidden);

    return (
        <div className='header' >
            <div className='logo-container'><Link to='/' ><Logo/></Link></div>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                <Link className='option' to={!currentUser?'/account':''} onClick={() => currentUser ? dispatch(signOutStart()) : null}> {currentUser?'SIGN OUT':'SIGN IN'}</Link>
                <CartIcon/>
                {
                    isCartDropdownHided ? null :
                    <CartDropdown/>
                }
            </div>
        </div>
    )
}
export default Header;