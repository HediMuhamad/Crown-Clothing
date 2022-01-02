import React from 'react';
import './home-page.styles.scss';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component';
const HomePage = () =>{
    return(
        <div className='home-page'>
            <DirectoryMenu/>
        </div>
    )
}

export default HomePage;