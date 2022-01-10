import React from 'react';
import { Route } from 'react-router-dom';
import './shop-page.styles.scss'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsSection from '../../components/collections-section/collections-section.component'

import { WithSpinner } from '../../components/with-spinner/with-spinner.component';

const ShopPage = ({isDataInLoading, match}) => (
    <div className='shop-page'>
        <Route exact path={match.url} render={(props) => WithSpinner(CollectionsOverview)({isDataInLoading, ...props}) } />
        <Route path={`${match.url}/:collection`} render={(props) => WithSpinner(CollectionsSection)({isDataInLoading, ...props}) } />
    </div>
)

export default ShopPage;