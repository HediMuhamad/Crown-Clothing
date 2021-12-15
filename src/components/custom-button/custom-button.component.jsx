import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({buttonText, classList, ...otherProps}) => (
    <button className={`custom-button ${classList}`} {...otherProps} >{buttonText}</button>
)

export default CustomButton;