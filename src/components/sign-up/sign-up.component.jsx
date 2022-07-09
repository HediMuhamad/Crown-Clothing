import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './sign-up.styles.scss'

import { CustomButton } from '../custom-button/custom-button.component';
import TextField from '../text-field/text-field.component';

import { signUpWithEmailStart } from '../../redux/user/user.action'

const SignUp = () => {
    const dispatch = useDispatch();

    const [state, setState] = useState({displayName: '', email: '', password: '', confirmPassword: ''})
    const {displayName, email, password, confirmPassword} = state;

    const handleSubmit = event => {
        event.preventDefault();
        if(password===confirmPassword){
            dispatch(signUpWithEmailStart({displayName, email, password}))
        }
    }

    const textFieldChangeHandler = event => {
        const {name, value} = event.target;
        setState({...state, [name]:value})
    }

    return(
        <div className='sign-up'>
            <h1>I do not have account</h1>
            <span>Sign up with email and password</span>
            <form method='POST'>
                <TextField
                    label='Display Name'
                    type="text"
                    name="displayName"
                    onChange={textFieldChangeHandler}
                    value={displayName}
                    required
                />
                <TextField
                    label='Email'
                    type="email"
                    name="email"
                    onChange={textFieldChangeHandler}
                    value={email}
                    required
                />
                <TextField
                    label='Password'
                    type="password"
                    name="password"
                    onChange={textFieldChangeHandler}
                    value={password}
                    required
                />
                <TextField
                    label='Confirm Password'
                    type="password"
                    name="confirmPassword"
                    onChange={textFieldChangeHandler}
                    value={confirmPassword}
                    required
                />
                <CustomButton classlist={'full-width'} type="submit" onClick={handleSubmit}>SIGN UP</CustomButton>
            </form>
        </div>
    )

}

export default SignUp;