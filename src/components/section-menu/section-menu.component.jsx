import React from 'react';

import { selectDirectorySections } from '../../redux/sections/sections.selector' 
import { useSelector } from 'react-redux';

import SectionItem from '../section-item/section-item.components';

import './section-menu.component.scss';

const SectionMenu = () => { 
    const sections = useSelector(selectDirectorySections);
    return (
        <div className='directory-menu'>{
            sections.map(({id, ...UsableDate})=>{
                return <SectionItem key={id} {...UsableDate}/>
            })
        }</div>
    )
}

export default SectionMenu