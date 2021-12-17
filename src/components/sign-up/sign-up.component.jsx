import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss'

class SignUp extends React.Component{
    
    constructor(){
        super();
        this.state={displayName: '', email: '', password: '', confirmPassword: '', passwordConfirmed: false};
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }

    handlePasswordConfirmation = event => {
        this.handleChange(event);
        this.setState({passwordConfirmed:this.state.password===event.target.value});
    }

    render(){
        return(
            <div className='sign-up'>
                <h2>I do not have account</h2>
                <span>Sign up with email and password</span>
                <form method='POST'>
                    <FormInput
                        label='Display Name'
                        type="text"
                        name="displayName"
                        onChange={this.handleChange}
                        value={this.state.displayName}
                        required
                    />
                    <FormInput
                        label='Email'
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        label='Password'
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                    <FormInput
                        label='Confirm Password'
                        type="password"
                        name="confirmPassword"
                        onChange={this.handlePasswordConfirmation}
                        value={this.state.confirmPassword}
                        required
                    />
                    <CustomButton classlist={'full-width'} type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignUp; 