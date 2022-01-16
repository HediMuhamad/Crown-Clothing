import React from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss'

import { CustomButton } from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.action"

class SignIn extends React.Component {
    
    constructor(){
        super()
        this.state = {email: '', password: '',};
    }

    textFieldChangeHandler = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        emailSignInStart({email: this.state.email, password: this.state.password});
    }

    googleAuthHandler = async () => {
        const { googleSignInStart } = this.props;
        googleSignInStart();
    }


    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form method='POST'>
                    <FormInput
                        label='Email'
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.textFieldChangeHandler}
                        required
                    ></FormInput>
                    <FormInput
                        label='Password'
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.textFieldChangeHandler}
                        required
                    ></FormInput>
                    <div className='button-group'>
                        <CustomButton
                            type='submit'
                            classlist={this.state.buttonsDisabled?'disabled':null}
                            onClick={this.handleSubmit}
                        >SIGN IN</CustomButton>
                        <CustomButton
                            type='button'
                            classlist={`google-btn ${this.state.buttonsDisabled?'disabled':null}`}
                            onClick={(event)=>this.googleAuthHandler(event)}
                        >SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (props) => dispatch(emailSignInStart(props)),
})

export default connect(null, mapDispatchToProps)(SignIn)