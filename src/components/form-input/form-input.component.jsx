import React from 'react';
import './form-input.styles.scss'

const FormInput = ({label, ...inputParams}) => (
    <div className='group'>
        <input className='form-input' {...inputParams} ></input>
        <label className={`form-input-label ${inputParams.value.length > 0 ? 'shrink' : null}`}>{label}</label>
        {/* Value property in ...inputParams just needed for styling of showing label, but we passed also for form-input in order to less code writing */}
    </div>
)

export default FormInput;