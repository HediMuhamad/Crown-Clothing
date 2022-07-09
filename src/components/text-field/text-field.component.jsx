import React from 'react';
import './text-field.styles.scss'

const TextField = ({label, fullBorder, ...inputParams}) => (
    <div className='text-field-components'>
        <input className={`form-input ${fullBorder ? 'full-border' : ''}`} {...inputParams} ></input>
        <label className={`form-input-label ${inputParams.value.length > 0 ? 'shrink' : null} ${fullBorder===true ? 'more-left' : ''}`}>{label}</label>
        {/* Value property in ...inputParams just needed for styling of showing label, but we passed also for form-input in order to less code writing */}
    </div>
)

export default TextField