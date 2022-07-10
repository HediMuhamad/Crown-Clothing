import React, { useState } from 'react';

import TextField from "../../components/text-field/text-field.component"
import TextArea from '../../components/text-area/text-area.component';
import { CustomButton } from '../../components/custom-button/custom-button.component'

import { sendMessageToDB } from '../../firebase/firestore'

import './contact-page.styles.scss'

const ContactPage = () => { 

    const [state, setState] = useState({name:'', email:'', phoneNumber:'', subject:'', message:'', isSent: false});
    const [preState, setPreState] = useState({name:'', email:'', phoneNumber:'', subject:'', message:''});
    const {name, email, phoneNumber, subject, message, isSent} = state;

    const inputChangeHandler = (event) => {
        const {name, value} = event.target;
        setState({...state, [name]:value, isSent:false})
    }

    const sendMessageHandler = async () => {

        if((name===preState.name) && (email===preState.email) && (phoneNumber===preState.phoneNumber) && (subject===preState.subject) && (message===preState.message)){
            setState({...state, isSent:true});
            return;
        }

        const feedback = await sendMessageToDB(name, email, phoneNumber, subject, message);
        if(feedback){
            setState({...state, isSent:true});
            setPreState({name, email, phoneNumber, subject, message});
        }
    }

    return (
        <div className='contact-page'>
            <div className='contacts-container'>
                <div className='request-container'>
                    <div className='header'>Send Your Request</div>
                    <div className='detail-container'>
                        <TextField
                            label='Name'
                            name='name'
                            type='text'
                            value={name}
                            onChange={inputChangeHandler}
                        />
                        <TextField
                            label='Phone Number'
                            name='phoneNumber'
                            type='number'
                            value={phoneNumber}
                            onChange={inputChangeHandler}
                        />
                        <TextField
                            label='Subject'
                            name='subject'
                            type='text'
                            value={subject}
                            onChange={inputChangeHandler}
                        />
                        <TextField
                            label='Email'
                            name='email'
                            type='email'
                            value={email}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div className='content-container'>
                        <TextArea
                            label='Message'
                            name='message'
                            fullBorder
                            value={state.message}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <CustomButton disabled={isSent} classlist={isSent ? 'disabled' : ''} onClick={sendMessageHandler} >{isSent ? 'Sent' : 'Send'}</CustomButton>
                </div>
                <div className='contact-list-container'>
                    <div className='header'>Reach Us</div>
                    <div className='contact-content-container'>
                        <tr>
                            <td>Email</td>
                            <td>contact@notexist.com</td>
                        </tr>  
                        <tr>
                            <td>Phone No.</td>
                            <td>+000 360-201-6870</td>
                        </tr>  
                        <tr>
                            <td>Address</td>
                            <td>#232, Ground floor, Lowa building, 14 Terra Street, Portland, Washington, 97218</td>
                        </tr>  
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default ContactPage;