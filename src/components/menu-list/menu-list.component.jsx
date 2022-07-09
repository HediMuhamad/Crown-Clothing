import { Link } from "react-router-dom"
import './menu-list.styles.scss'

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux" 

import { toggleMenuListShowPropery } from "../../redux/app/app.action"
import { signOutStart } from '../../redux/user/user.action'

import { selectCurrentUser } from "../../redux/user/user.selectors"

const MenuList = () => {
	
	const currentUser = useSelector(selectCurrentUser); 
	const dispatch = useDispatch();


    return (
		<div className='menu-list'>
			<Link className='option' to='/shop' onClick={()=>dispatch(toggleMenuListShowPropery())}>SHOP</Link>
			<Link className='option' to='/contact' onClick={()=>dispatch(toggleMenuListShowPropery())}>CONTACT</Link>
			<Link className='option' to={!currentUser?'/account':''} onClick={() => currentUser ? dispatch(signOutStart()) : dispatch(toggleMenuListShowPropery())}> {currentUser?'SIGN OUT':'SIGN IN'}</Link>
			<Link className='option' to={'/checkout'} onClick={()=>dispatch(toggleMenuListShowPropery())}>Your Cart</Link>
		</div>
    )
}

export default MenuList;
