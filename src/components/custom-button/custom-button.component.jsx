import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({children, classlist, ...otherProps}) => (
    <button className={`custom-button ${classlist}`} {...otherProps} >{children}</button>
)

export default CustomButton;