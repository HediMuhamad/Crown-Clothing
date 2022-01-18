import React, { useState } from 'react';
import { connect } from 'react-redux';
import './sign-up.styles.scss'

import { CustomButton } from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { signUpWithEmailStart } from '../../redux/user/user.action'

const SignUp = ({ signUpWithEmail, }) => {
    const [state, setState] = useState({displayName: '', email: '', password: '', confirmPassword: ''})
    const {displayName, email, password, confirmPassword} = state;

    const handleSubmit = event => {
        event.preventDefault();
        if(password===confirmPassword){
            signUpWithEmail({displayName, email, password});
        }
    }

    const textFieldChangeHandler = event => {
        const {name, value} = event.target;
        setState({...state, [name]:value})
    }

    return(
        <div className='sign-up'>
            <h2>I do not have account</h2>
            <span>Sign up with email and password</span>
            <form method='POST'>
                <FormInput
                    label='Display Name'
                    type="text"
                    name="displayName"
                    onChange={textFieldChangeHandler}
                    value={displayName}
                    required
                />
                <FormInput
                    label='Email'
                    type="email"
                    name="email"
                    onChange={textFieldChangeHandler}
                    value={email}
                    required
                />
                <FormInput
                    label='Password'
                    type="password"
                    name="password"
                    onChange={textFieldChangeHandler}
                    value={password}
                    required
                />
                <FormInput
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

const mapDispatchToProps = dispatch => ({
    signUpWithEmail: (props) => dispatch(signUpWithEmailStart(props))
})

export default connect(null, mapDispatchToProps)(SignUp); 