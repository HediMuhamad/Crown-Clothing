import React, { useState } from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss'

import { CustomButton } from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.action"

const SignIn = ({ emailSignInStart, googleSignInStart}) => {
    
    const [state, setState] = useState({email: '', password: '', buttonsDisabled: ''});
    const {email, password, buttonsDisabled} = state

    const textFieldChangeHandler = event => {
        const {name, value} = event.target;
        setState({...state, [name]:value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        emailSignInStart({email: email, password: password});
    }

    const googleAuthHandler = async () => {
        googleSignInStart();
    }


    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form method='POST'>
                <FormInput
                    label='Email'
                    type="email"
                    name="email"
                    value={email}
                    onChange={textFieldChangeHandler}
                    required
                ></FormInput>
                <FormInput
                    label='Password'
                    type="password"
                    name="password"
                    value={password}
                    onChange={textFieldChangeHandler}
                    required
                ></FormInput>
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

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (props) => dispatch(emailSignInStart(props)),
})

export default connect(null, mapDispatchToProps)(SignIn)