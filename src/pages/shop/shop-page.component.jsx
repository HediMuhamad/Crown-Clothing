import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './shop-page.styles.scss'


import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container"
import SectionContainer from '../../components/section/section.container';

const ShopPage = () => {    
    return (
        <div className='shop-page'>
            <Routes>
                <Route exact path='' element={<CollectionOverviewContainer/>} />
                <Route path={`:collection`} element={<SectionContainer/>} />
            </Routes>
        </div>
    )
}

export default ShopPage;