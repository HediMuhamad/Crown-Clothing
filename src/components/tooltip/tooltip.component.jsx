import React from 'react'

import './tooltip.styles.scss'

const Tooltip = ({children}) => {
    return (
        <div className={`tooltip`}><span>{children}</span></div>
    )
}

export default Tooltip