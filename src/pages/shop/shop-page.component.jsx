import React from 'react';
import { Route } from 'react-router-dom';
import './shop-page.styles.scss'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsSection from '../../components/collections-section/collections-section.component'

const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={match.url} component={CollectionsOverview} />
        <Route path={`${match.url}/:collection`} component={CollectionsSection} />
    </div>
)

export default ShopPage;