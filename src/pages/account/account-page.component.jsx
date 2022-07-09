import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors'

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './account-page.styles.scss'

const AccountPage = () => { 

    const currentUser = useSelector(selectCurrentUser);

    return ( 
        currentUser ? <Navigate replace to={'/'}/> :
        <div className='account' >
            <SignIn/>
            <hr></hr>
            <SignUp/>
        </div>
    )
}

export default AccountPage;