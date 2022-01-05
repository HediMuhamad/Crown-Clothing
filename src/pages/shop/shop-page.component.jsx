import React from 'react';

import { connect } from 'react-redux';
import { selectShopDataCollections } from '../../redux/shop-data/shop-data.selector';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop-page.styles.scss'

const ShopPage = ({collections}) => (
    <div className='shop-page'>{
        collections.map(({id, ...others})=>{
            return <CollectionPreview key={id} {...others} />
        })
    }</div>
)

const mapStateToProps = state => ({
    collections: selectShopDataCollections(state),
})

export default connect(mapStateToProps)(ShopPage);