import React from "react";

import { connect } from 'react-redux';
import { selectShopDataCollections } from '../../redux/shop-data/shop-data.selector';

import './collections-overview.styles.scss'
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({collections}) => (
    <div>{
        Object.keys(collections).map(key=>
            <CollectionPreview key={key} viewLimit={4} {...collections[key]} />
        )
    }</div>
)

const mapStateToProps = state => ({
    collections: selectShopDataCollections(state),
})

export default connect(mapStateToProps)(CollectionOverview)