import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOut } from '../../firebase/authentication';

import './header.styles.scss'
import { ReactComponent as Logo } from '../../logo.svg'

const Header = ({currentUser}) => (
    <div className='header' >
        <div className='logo-container'><Link to='/' ><Logo/></Link></div>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            <Link className='option' to={!currentUser?'/account':''} onClick={authOut}> {currentUser?'SIGN OUT':'SIGN IN'}</Link>
        </div>
    </div>
    )

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);