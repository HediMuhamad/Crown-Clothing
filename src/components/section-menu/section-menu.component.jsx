import React from 'react';

import { selectDirectorySections } from '../../redux/sections/sections.selector' 
import { connect } from 'react-redux';

import SectionItem from '../section-item/section-item.components';

import './section-menu.component.scss';

const SectionMenu = ({sections}) => (
    <div className='directory-menu'>{
        sections.map(({id, ...UsableDate})=>{
            return <SectionItem key={id} {...UsableDate}/>
        })
    }</div>
)

const mapStateToProps = (state) => ({
    sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(SectionMenu);