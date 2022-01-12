import React from 'react';
import { Route } from 'react-router-dom';
import './shop-page.styles.scss'


import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container"
import SectionComponentContainer from '../../components/section/section.container';

const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={match.url} component={CollectionOverviewContainer} />
        <Route path={`${match.url}/:collection`} component={SectionComponentContainer} />
    </div>
)

export default ShopPage;