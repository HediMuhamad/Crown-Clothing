import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


/*Style and icons */
import './header.styles.scss'
import { ReactComponent as Logo } from '../../logo.svg'

/*Components */
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import BurgerIcon from '../burger-icon/burger-icon.component'

/*Selectors */
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectMenuListShowing } from "../../redux/app/app.selector"

/*Actions */
import { signOutStart } from '../../redux/user/user.action'
import { toggleMenuListShowPropery } from '../../redux/app/app.action'


const Header = () => {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    
    const currentUser = useSelector(selectCurrentUser);
    const isCartDropdownHided = useSelector(selectCartHidden);
    const menuListShowed = useSelector(selectMenuListShowing);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    
    const screenSizeHandler = () => {
        setScreenWidth(window.innerWidth);
    }
    
    window.addEventListener("resize", screenSizeHandler); 
    
    return (
        <div className='header' >
            <div className='logo-container' onClick={()=>{if(path!=='/' && menuListShowed){dispatch(toggleMenuListShowPropery())}}}><Link to='/' ><Logo/></Link></div>
            {
            screenWidth >= 500 ?    
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
            :
            <BurgerIcon clickHandler={()=>dispatch(toggleMenuListShowPropery())}/>
        }</div>
    )
}
export default Header;