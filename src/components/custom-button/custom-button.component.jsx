import React from 'react';
import './custom-button.styles.scss'

export const CustomButton = ({children, classlist, ...otherProps}) => (
    <button className={`custom-button ${classlist}`} {...otherProps} >{children}</button>
)