import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg'
import './header.styles.scss'

const Header = ({match, history}) => (
    <div className='header' >
        <div className='logo-container'
        onClick={()=>history.push('/')} ><Logo/></div>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
        </div>
    </div>
    )

export default withRouter(Header);