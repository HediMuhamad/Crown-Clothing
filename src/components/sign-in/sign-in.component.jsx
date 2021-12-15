import React from 'react';
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
    
    constructor(){
        super()
        this.state = {email: '', password: ''};
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
                        <CustomButton buttonText={"SIGN IN"} type="submit" />
                        <CustomButton buttonText={"SIGN IN WITH GOOGLE"} />
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn