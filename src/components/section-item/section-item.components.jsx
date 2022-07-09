import React from 'react';
import './section-item.styles.scss'
import { useNavigate} from 'react-router-dom'

const SectionItem = ({title, imageUrl, size, linkUrl}) =>{
    const navigate = useNavigate();

    return (
        <div className={`menu-item ${size}`}>
            <div className='menu-item-background'
            style={{backgroundImage: `url(${imageUrl})`}}
            onClick={()=>{navigate(`${linkUrl}`)}} ></div>
            <div className='info-container'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}
export default SectionItem;