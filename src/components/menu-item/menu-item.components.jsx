import React from 'react';
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, id, linkUrl, history, match}) =>(
        <div className={`menu-item ${size}`}>
            <div className='menu-item-background'
            style={{backgroundImage: `url(${imageUrl})`}}
            onClick={()=>{history.push(`${match.url}${linkUrl}`)}} ></div>
            <div className='info-container'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )

export default withRouter(MenuItem);