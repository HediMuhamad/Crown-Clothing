import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg'
import './header.styles.scss'

const Header = ({history, currentUser, accountHandler}) => {
    
    return(
    <div className='header' >
        <div className='logo-container'
        onClick={()=>history.push('/')} ><Logo/></div>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            <Link className='option' to={!currentUser?'/account':''} onClick={accountHandler}> {currentUser?'SIGN OUT':'SIGN IN'}</Link>
        </div>
    </div>
    )
}

export default withRouter(Header);