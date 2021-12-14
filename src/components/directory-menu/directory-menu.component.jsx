import React from 'react';
import MenuItem from '../menu-item/menu-item.components';
import './directory-menu.component.scss';
import section from "./Directory.Data"

class DirectoryMenu extends React.Component{
    constructor(){
        super();
        this.state={
            section: section
        };
    }

    render(){
        return(
            <div className='directory-menu'>{
                this.state.section.map(({id, ...UsableDate})=>{
                    return <MenuItem key={id} {...UsableDate}/>
                })
            }</div>
        )
    }

}

export default DirectoryMenu;