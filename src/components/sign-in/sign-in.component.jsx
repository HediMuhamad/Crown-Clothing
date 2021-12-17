import React from 'react';
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {signInWithGoogle} from '../../firebase/sign-in'

class SignIn extends React.Component {
    
    constructor(){
        super()
        this.state = {email: '', password: '', buttonsDisabled:false};
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value}, ()=>{
            console.log(value)
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({});
    }

    handleLogin = async (event) => {
        this.setState({buttonsDisabled:true})
        await signInWithGoogle();
        this.setState({buttonsDisabled:false})
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
                        onChange={this.handleChange}
                        required
                    ></FormInput>
                    <FormInput
                        label='Password'
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    ></FormInput>
                    <div className='button-group'>
                        <CustomButton
                            type='submit'
                            classlist={this.state.buttonsDisabled?'disabled':null}
                            onClick={(event)=>this.handleLogin(event)}
                            key={'email-signin'}
                        >SIGN IN</CustomButton>
                        <CustomButton
                            type='submit'
                            classlist={this.state.buttonsDisabled?'disabled':null}
                            onClick={(event)=>this.handleLogin(event)}
                            key={'google-signin'}
                        >SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn