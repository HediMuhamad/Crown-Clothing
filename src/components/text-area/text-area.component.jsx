import React from 'react';
import './text-area.styles.scss'

const TextArea = ({label, fullBorder, resizeX, resizeY, ...inputParams}) => {
    
    const isFullBorder = fullBorder ? 'full-border' : null;
    const resizeClassNames = resizeX & resizeY ? 'resize-both' : resizeX ? 'resize-x' : resizeY ? 'resize-y' : 'resize-none';

    const didNeedMoreLeft = fullBorder ? 'more-left' : null;
    const didShrinked =  inputParams.value.length > 0 ? 'shrink' : null;
    
    return (
        <div className='text-area-components'>
            <textarea className={`form-input ${isFullBorder} ${resizeClassNames}`} {...inputParams}/>
            <label className={`form-input-label ${didNeedMoreLeft} ${didShrinked}`}>{label}</label>
        </div>
    )
}

export default TextArea;