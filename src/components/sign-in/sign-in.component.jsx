import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './sign-in.styles.scss'

import { CustomButton } from '../custom-button/custom-button.component';
import TextField from '../text-field/text-field.component';

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.action"

const SignIn = () => {
    
    const dispatch = useDispatch();
    const [state, setState] = useState({email: '', password: '', buttonsDisabled: ''});
    const {email, password, buttonsDisabled} = state


    const textFieldChangeHandler = event => {
        const {name, value} = event.target;
        setState({...state, [name]:value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(emailSignInStart({email: email, password: password}))
    }

    const googleAuthHandler = async () => { 
        dispatch(googleSignInStart())
    }


    return(
        <div className='sign-in'>
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>
            <form method='POST'>
                <TextField
                    label='Email'
                    type="email"
                    name="email"
                    value={email}
                    onChange={textFieldChangeHandler}
                    required
                ></TextField>
                <TextField
                    label='Password'
                    type="password"
                    name="password"
                    value={password}
                    onChange={textFieldChangeHandler}
                    required
                ></TextField>
                <div className='button-group'>
                    <CustomButton
                        type='submit'
                        classlist={buttonsDisabled?'disabled':null}
                        onClick={handleSubmit}
                    >SIGN IN</CustomButton>
                    <CustomButton
                        type='button'
                        classlist={`google-btn ${buttonsDisabled?'disabled':null}`}
                        onClick={(event)=>googleAuthHandler(event)}
                    >SIGN IN WITH GOOGLE</CustomButton>
                </div>
            </form>
        </div>
    )

}

export default SignIn