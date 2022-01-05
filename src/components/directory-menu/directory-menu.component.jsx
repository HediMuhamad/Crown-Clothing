import React from 'react';

import { selectDirectorySections } from '../../redux/directory/directory.selector' 
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.components';

import './directory-menu.component.scss';

const DirectoryMenu = ({sections}) => (
    <div className='directory-menu'>{
        sections.map(({id, ...UsableDate})=>{
            return <MenuItem key={id} {...UsableDate}/>
        })
    }</div>
)

const mapStateToProps = (state) => ({
    sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(DirectoryMenu);