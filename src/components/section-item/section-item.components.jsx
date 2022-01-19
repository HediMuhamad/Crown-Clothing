import React from 'react';
import './section-item.styles.scss'
import {withRouter} from 'react-router-dom'

const SectionItem = ({title, imageUrl, size, linkUrl, history, match}) =>(
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

export default withRouter(SectionItem);